using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SmartDataGenerator
{
	class DependencyData
	{
		public string TableName { get; set; }
		public List<string> Values { get; set; }
		public DependencyData()
		{
			Values = new List<string>();
		}
	}
}
