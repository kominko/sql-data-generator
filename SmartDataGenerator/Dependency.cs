using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SmartDataGenerator
{
	class DependencyInfo
	{
		public string ColumnName { get; set; }
		public string DependentTableName { get; set; }
		public string DependentColumnname { get; set; }
	}
}
