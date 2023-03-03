using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SmartDataGeneratorLogic
{
	class ColumnDefinition
	{
		public string ColumnName { get; set; }
		public bool IsIdentity { get; set; }
		public string DataType { get; set; }
		public int Size { get; set; }
		public bool IsNullable { get; set; }
	}
}
