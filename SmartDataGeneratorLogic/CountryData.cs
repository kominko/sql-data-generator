using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Xml.Linq;

namespace SmartDataGeneratorLogic
{
	public class CountryData
	{
		public static Dictionary<string, string> GetCountries()
		{
			//unicode trick i.e. read with stream reader then detect byte order marks to get encoding
			using (Stream stream = typeof(CountryData).Assembly.GetManifestResourceStream("SmartDataGeneratorLogic." + "countries.xml"))
			using (StreamReader sr = new StreamReader(stream, true))
			{
				XDocument xdoc = XDocument.Load(sr);
				return (from lv1 in xdoc.Descendants("ISO_3166-1_Entry")
						select new
						{
							Name = lv1.Descendants("ISO_3166-1_Country_name").Nodes().First().ToString(),
							Code = lv1.Descendants("ISO_3166-1_Alpha-2_Code_element").Nodes().First().ToString()
						}).ToDictionary(x => x.Code, x => x.Name);
			}
		}
	}
}
