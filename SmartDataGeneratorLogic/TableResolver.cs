using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;

namespace SmartDataGeneratorLogic
{
	class TableResolver
	{
		private readonly string _TableName;
		private readonly string _ConnString;

		public TableResolver(string tableName, string connString)
		{
			_TableName = tableName;
			_ConnString = connString;
		}


		public List<DependencyInfo> FindDependencies()
		{
			List<DependencyInfo> TableDependency = new List<DependencyInfo>();
			using (var conn = new SqlConnection(_ConnString))
			{
				var comm = conn.CreateCommand();
				comm.CommandText = FK_FINDER_QUERY;
				comm.Parameters.AddWithValue("@_TableName", _TableName);
				conn.Open();
				var reader = comm.ExecuteReader();
				while (reader.Read())
				{
					TableDependency.Add(new DependencyInfo { ColumnName = reader[0].ToString(), DependentTableName = reader[1].ToString(), DependentColumnname = reader[2].ToString() });
				}
				conn.Close();
			}
			return TableDependency;
		}

		public List<DependencyData> GetDependencyData(List<DependencyInfo> dependencyInfoList)
		{
			var uinqueTables = from d in dependencyInfoList 
							   group d by new { d.DependentTableName }
							   into t
							   select new DependencyInfo
								   {
									   DependentTableName = t.Select(x => x.DependentTableName).FirstOrDefault(),
									   DependentColumnname = t.Select(x => x.DependentColumnname).FirstOrDefault()
								   };
			
			List<DependencyData> DependencyDataList = new List<DependencyData>();
			foreach (var dInfo in uinqueTables)
			{
				var query = string.Format("SELECT {0} FROM {1}", dInfo.DependentColumnname, dInfo.DependentTableName);
				DependencyData dependencyData = new DependencyData();
				dependencyData.TableName = dInfo.DependentTableName;
				using (var conn = new SqlConnection(_ConnString))
				{
					SqlCommand comm = conn.CreateCommand();
					comm.CommandText = query;
					comm.Connection.Open();
					var reader = comm.ExecuteReader();
					while (reader.Read())
					{
						dependencyData.Values.Add(reader[0].ToString());
					}
					DependencyDataList.Add(dependencyData);
				}
			}
			return DependencyDataList;
		}

		public void ShowDependencies(List<DependencyInfo> dependencyInfoList)
		{
			if (dependencyInfoList.Count() > 0)
			{
				var dependeningTables = from d in dependencyInfoList
										group d.DependentTableName by d.DependentTableName into t
										select t.Key;

				Console.WriteLine(string.Format("{0} : Depending Tables.", _TableName));
				foreach (var t in dependeningTables)
				{
					Console.WriteLine(t);
				}

				/*
				Console.WriteLine(string.Format("{0} : The following columns have dependencies.", _TableName));
				foreach (var d in dependency)
				{
					Console.WriteLine(string.Format("{0} : {1}.{2}", d.ColumnName, d.Dependent_TableName, d.DependentColumnname));
				}
				*/
			}
		}

		#region FK finder query
		private const string FK_FINDER_QUERY = @"
						SELECT 
			CAST(FC.NAME AS VARCHAR(255)) AS  COLUMN_NAME, 
			CAST(P.NAME AS VARCHAR(255)) AS DEPENDING_TABLE,
			CAST(RC.NAME AS VARCHAR(255))  AS DEPENDING_COLUMN_NAME
			FROM SYSOBJECTS F
			INNER JOIN SYSOBJECTS C ON  F.PARENT_OBJ = C.ID
			INNER JOIN SYSREFERENCES R ON F.ID =  R.CONSTID
			INNER JOIN SYSOBJECTS P ON R.RKEYID = P.ID
			INNER  JOIN SYSCOLUMNS RC ON R.RKEYID = RC.ID AND R.RKEY1 = RC.COLID
			INNER  JOIN SYSCOLUMNS FC ON R.FKEYID = FC.ID AND R.FKEY1 = FC.COLID
			LEFT JOIN  SYSCOLUMNS RC2 ON R.RKEYID = RC2.ID AND R.RKEY2 = RC.COLID
			LEFT JOIN  SYSCOLUMNS FC2 ON R.FKEYID = FC2.ID AND R.FKEY2 = FC.COLID
			WHERE F.TYPE =  'F' AND C.NAME = @_TableName
			ORDER BY CAST(P.NAME AS VARCHAR(255))";
		#endregion

	}
}
