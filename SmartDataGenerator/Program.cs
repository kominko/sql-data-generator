using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using SmartDataGeneratorLogic;

namespace SmartDataGenerator
{
	class Program
	{
		private const string CONN_STRING = "Data Source=.\\SQLEXPRESS;Initial Catalog=ECDB;User Id=dev;Password=mnd577;";
		//private const string CONN_STRING = "Data Source=smithnephew-dev\\SQL2008;Initial Catalog=PRISYM_Data;User Id=dev;Password=Help8585;";
		private static int TotalRowsToGenerate = 1;
		private static string MainTableName = string.Empty;
		private static string SubTableName = string.Empty;
		private static bool VerControlled = false;
		private static int RowNumberStatAt = 0;

		static void Main(string[] args)
		{
			GetUserInput();
			var dg = new DataGeneratorSQL(RowNumberStatAt, TotalRowsToGenerate, CONN_STRING, VerControlled, MainTableName, SubTableName);
			dg.UpdateUI += new UIDelegate(UIUpdater);
			Console.WriteLine(dg.Generate());
			Console.ReadLine();
		}

		static private void UIUpdater(string s)
		{
			if (s == ".")
				Console.Write(s);
			else
				Console.WriteLine(s);
		}

		static void GetUserInput()
		{
			Console.WriteLine("As of now, this program only works with SQL Server");
			Console.WriteLine("==================================================");
			Console.Write("Enter Table Name : ");
			var tableName = Console.ReadLine().ToUpper();
			Console.Write("Is version controlled [Y/N] : ");
			var verControlled = Console.ReadLine().ToUpper();
			Console.Write("How many rows to generate? : ");
			int.TryParse(Console.ReadLine(), out TotalRowsToGenerate);
			TotalRowsToGenerate = TotalRowsToGenerate < 1 ? 1 : TotalRowsToGenerate;

			if (verControlled == "Y")
				VerControlled = true;
			MainTableName = string.Empty;
			SubTableName = string.Empty;
			if (VerControlled)
			{
				MainTableName = tableName + "_HISTORY";
				SubTableName = tableName + "_WORKING";
			}
			else
			{
				MainTableName = tableName;
			}
		}
	}
}
