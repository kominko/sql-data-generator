using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.IO;
using System.Xml.Linq;
using System.Diagnostics;

namespace SmartDataGenerator
{
	class DataGeneratorSQL : SmartDataGenerator.IDataGenerator
	{
		#region Fields
		private const int BATCH_SIZE = 500;
		private const bool BATCH_MODE = false;
		private readonly List<string> GuidTable = new List<string>();
		private readonly int _TotalRowsToGenerate;
		private readonly string _ConnString;
		private readonly string _MainTableName;
		private readonly string _SubTableName;
		private readonly Dictionary<string, object> _MainTableDef = new Dictionary<string, object>();
		private readonly Dictionary<string, object> _SubTableDef = new Dictionary<string, object>();
		private readonly Dictionary<string, object> _Dependency = new Dictionary<string, object>();
		private readonly bool _VerControlled = false;
		private List<DependencyInfo> DependencyInfo = new List<DependencyInfo>();
		private List<DependencyData> DependencyData = new List<DependencyData>();
		private Dictionary<string, string> Countries = new Dictionary<string, string>();
		private int RowNumberStartAt;
		private int NumberOfRowsCreated = 0;
		#endregion

		public DataGeneratorSQL(int rowNumberStartAt, int totalRowsToGenerate, string connString, bool VerControlled, string mainTableName, string subTableName)
		{
			_ConnString = connString;
			_MainTableName = mainTableName;
			_SubTableName = subTableName;
			_VerControlled = VerControlled;
			if (_MainTableName.Contains("COUNTRY") || _MainTableName.Contains("COUNTRIES"))
			{
				Countries = CountryData.GetCountries();
				RowNumberStartAt = 0;
				_TotalRowsToGenerate = Countries.Count();
			}
			else
			{
				RowNumberStartAt = rowNumberStartAt;
				_TotalRowsToGenerate = totalRowsToGenerate;
			}

		}

		public void Generate()
		{
			Stopwatch sw = new Stopwatch();
			sw.Start();
			CheckDependencies();
			MakeGuids();
			ReadColumns();
			InsertData();
			sw.Stop();
			Console.WriteLine(string.Format("Total time taken : {0:0.00} seconds [{1}ms]", sw.ElapsedMilliseconds/1000, sw.ElapsedMilliseconds));
			Console.WriteLine(string.Format("Time taken per row : [{0}ms]", sw.ElapsedMilliseconds/_TotalRowsToGenerate));
		}

		private void CheckDependencies()
		{
			var tr = new TableResolver(_MainTableName, _ConnString);
			DependencyInfo = tr.FindDependencies();
			DependencyData = tr.GetDependencyData(DependencyInfo);
			var emptyDependencyTables = new List<string>();

			foreach (var d in DependencyData)
			{
				if (d.Values.Count() < 1)
				{
					emptyDependencyTables.Add(d.TableName);
				}
			}
			if (emptyDependencyTables.Count > 0)
			{
				GenerateDependencyData(emptyDependencyTables);
				DependencyData = tr.GetDependencyData(DependencyInfo);
			}
		}

		private void GenerateDependencyData(List<string> emptyDependencyTables)
		{
			if (emptyDependencyTables.Count > 0)
			{
				Console.WriteLine(string.Format("Creating Dependency Data for {0} dependency tables.", emptyDependencyTables.Count));
				foreach (var d in emptyDependencyTables)
				{
					var mainTableName = d;
					var subTableName = d.Replace("_HISTORY", "_WORKING");
					var verControlled = d.Contains("_HISTORY");
					var dependencyDataGenerator = new SmartDataGenerator.DataGeneratorSQL(1, 10, _ConnString, verControlled, mainTableName, subTableName);
					dependencyDataGenerator.Generate();
				}
			}
		}

		private void MakeGuids()
		{
			for (int i = 0; i < _TotalRowsToGenerate; i++)
			{
				GuidTable.Add(Guid.NewGuid().ToString());
			}
		}

		private void ReadColumns()
		{
			var query = "SELECT COLUMN_NAME, DATA_TYPE, ISNULL(CHARACTER_MAXIMUM_LENGTH, 0) AS SIZE, IS_NULLABLE, COLUMNPROPERTY(object_id(TABLE_NAME), COLUMN_NAME, 'IsIdentity') AS ISIDENTITY FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @TableName";
			using (var conn = new SqlConnection(_ConnString))
			{
				conn.Open();
				var cmd = conn.CreateCommand();
				cmd.CommandText = query;
				cmd.Parameters.AddWithValue("@TableName", _MainTableName);
				var reader = cmd.ExecuteReader();
				while (reader.Read())
				{
					_MainTableDef.Add(reader["COLUMN_NAME"].ToString(), new ColumnDefinition { ColumnName = reader["COLUMN_NAME"].ToString(), IsIdentity = reader["ISIDENTITY"].ToString() == "1", DataType = reader["DATA_TYPE"].ToString(), Size = int.Parse(reader["SIZE"].ToString()), IsNullable = reader["IS_NULLABLE"].ToString().ToUpper() == "YES" });
				}
				conn.Close();

				if (_VerControlled)
				{
					conn.Open();
					var cmd2 = conn.CreateCommand();
					cmd2.CommandText = query;
					cmd2.Parameters.AddWithValue("@TableName", _SubTableName);
					var reader2 = cmd2.ExecuteReader();
					while (reader2.Read())
					{
						_SubTableDef.Add(reader2["COLUMN_NAME"].ToString(), new ColumnDefinition { ColumnName = reader2["COLUMN_NAME"].ToString(), IsIdentity = reader2["ISIDENTITY"].ToString() == "1", DataType = reader2["DATA_TYPE"].ToString(), Size = int.Parse(reader2["SIZE"].ToString()), IsNullable = reader2["IS_NULLABLE"].ToString().ToUpper() == "YES" });
					}
					conn.Close();
				}

			}
		}

		private string GenerateInsertStatement(string tableName, Dictionary<string, object> tableDef, int rowPosition)
		{
			StringBuilder SQLStatement = new StringBuilder();
			var fields = new StringBuilder();
			var values = new StringBuilder();
			var counter = 0;

			foreach (var d in tableDef)
			{
				counter++;
				var c = (ColumnDefinition)d.Value;
				if (!c.IsIdentity)
				{
					if (
						((tableName.ToUpper().Contains("COUNTRIES") || tableName.ToUpper().Contains("COUNTRY")) && c.DataType.Contains("varchar")) 
						&& (c.ColumnName.ToUpper().Contains("CODE") || c.ColumnName.ToUpper().Contains("ID"))
						&& (!c.ColumnName.ToUpper().Contains("USERID"))
					)
					{
							fields.AppendFormat("{0}", d.Key);
							values.AppendFormat("N'{0}'", Countries.Skip(rowPosition).FirstOrDefault().Key);
					}
					else if (
						((tableName.ToUpper().Contains("COUNTRIES") || tableName.ToUpper().Contains("COUNTRY")) && c.DataType.Contains("varchar")) 
						&& (c.ColumnName.ToUpper().Contains("NAME") || c.ColumnName.ToUpper().Contains("DESCRIPTION"))
						&& (!c.ColumnName.ToUpper().Contains("USERNAME"))
					)
					{
						fields.AppendFormat("{0}", d.Key);
						values.AppendFormat("N'{0}'", Countries.Skip(rowPosition).FirstOrDefault().Value.Replace("'", "''"));
					} else
					{
						fields.AppendFormat("{0}", d.Key);
						values.AppendFormat("{0}", SetupDataForFields((ColumnDefinition)d.Value, rowPosition));
					}
					if (counter < tableDef.Count())
					{
						fields.Append(",");
						values.Append(",");
					}
				}
			}
			SQLStatement.AppendFormat("INSERT INTO {0} ({1}) VALUES ({2})", tableName, fields, values);
			return SQLStatement.ToString();
		}

		private string SetupDataForFields(ColumnDefinition columnDef, int rowIndex)
		{
			var data = string.Empty;
			if (GetFromDependencyData(columnDef.ColumnName, out data))
			{
				return data;
			}
			if (columnDef.ColumnName.ToUpper().StartsWith("MAPSEC_APPRV") || columnDef.ColumnName.ToUpper().StartsWith("MAPSEC_PEND"))
			{
				data = "null";
			}
			else
			{
				switch (columnDef.DataType)
				{
					case "uniqueidentifier":
						var index = (rowIndex - RowNumberStartAt);
						data = string.Format("CONVERT(uniqueidentifier, '{0}')", GuidTable[index]);
						break;
					case "date":
						data = string.Format("'{0:yyyy-MM-dd}'", DateTime.Now);
						break;
					case "datetimeoffset":
					case "datetime":
					case "datetime2":
					case "smalldatetime":
						data = string.Format("'{0:yyyy-MM-dd HH:mm:ss.fff}'", DateTime.Now);
						break;
					case "time":
						data = string.Format("'{0:HH:mm:ss.fffffff}'", DateTime.Now);
						break;
					case "smallint":
					case "int":
						if (columnDef.ColumnName.ToUpper() == "MAPSEC_LIVEVERSION" && columnDef.IsNullable)
						{
							data = "null";
							break;
						}else if(columnDef.ColumnName.ToUpper().Contains("VERSION")){
							data = "1";
							break;
						}
						data = Utility.Random(50).ToString();
						break;
					case "bit":
						data = "CAST(1 AS BIT)";
						break;
					case "char":
					case "varchar":
					case "nchar":
					case "nvarchar":
						var meaningfulName = _MainTableName.Replace("_HISTORY", "");
						data = string.Format("{0} TEST {1}", meaningfulName, rowIndex);
						var size = columnDef.Size;
						if (data.Length > size)
						{
							if (size < 2)
							{
								data = "Y";
							}
							else if (size < 5)
							{
								data = string.Format("{0}{1}", data.Substring(0, size - 2), rowIndex);
								if (data.Length > size)
								{
									throw new Exception(string.Format("The Data length is longer than the size! \r\nColumn Name : {0},  \r\nSize {1}, \r\nData Length : {2}, \r\nData : {3}", columnDef.ColumnName, columnDef.Size, data.Length, data));
								}
							}
							else
							{
								data = "-";
							}
						}
						data = string.Format("'{0}'", data);
						break;
					case "money":
					case "smallmoney":
						data = string.Format("{0}.{1}", Utility.Random(99), Utility.Random(99));
						break;
					default:
						data = "null";
						break;
				}
			}
			return data;
		}

		private bool GetFromDependencyData(string columnName, out string data)
		{
			data = string.Empty;
			bool match = false;
			foreach(var d in DependencyInfo){
				if (d.ColumnName == columnName)
				{
					var dataAvailable = DependencyData.Where(x => x.TableName == d.DependentTableName).SingleOrDefault();
					data = dataAvailable.Values.Skip(Utility.Random(dataAvailable.Values.Count)).FirstOrDefault().ToString();
					match = true;
				}
			}
			data = string.Format("'{0}'", data);
			return match;
		}

		private void InsertData()
		{
			var batch_count = int.Parse(Math.Floor(double.Parse((_TotalRowsToGenerate / BATCH_SIZE).ToString())).ToString());
			var left_over = _TotalRowsToGenerate - batch_count * BATCH_SIZE;
			for (int i = 1; i <= batch_count; i++)
			{
				GenerateRecords(RowNumberStartAt, BATCH_SIZE);
				RowNumberStartAt = RowNumberStartAt + (BATCH_SIZE * i);
				Console.WriteLine(string.Format("Total of {0} rows created so far.", i * BATCH_SIZE));
			}
			if (left_over > 0)
			{
				GenerateRecords(RowNumberStartAt, _TotalRowsToGenerate);
			}
			Console.WriteLine(string.Format("\r\nDone creating {0} records.", _TotalRowsToGenerate));
		}

		private bool GenerateRecords(int start, int end)
		{
			bool result = false;
			try
			{
				using (var conn = new SqlConnection(_ConnString))
				{
					conn.Open();
					for (var i = 1; i <= end; i++)
					{
						var cmd1 = conn.CreateCommand();
						cmd1.CommandText = GenerateInsertStatement(_MainTableName, _MainTableDef, start + NumberOfRowsCreated);
						cmd1.ExecuteNonQuery();

						if (_VerControlled)
						{
							var cmd2 = conn.CreateCommand();
							cmd2.CommandText = GenerateInsertStatement(_SubTableName, _SubTableDef, start + NumberOfRowsCreated);
							cmd2.ExecuteNonQuery();
						}
						var factor = 0;
						if (_TotalRowsToGenerate < 51)
							factor = 1;
						else
							factor = 50;
						if (i % factor == 0)
							Console.WriteLine("#" + i);
						else
							Console.Write(".");
						NumberOfRowsCreated++;
					}
					conn.Close();
				}
				result = true;
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			return result;
		}
	}
}
