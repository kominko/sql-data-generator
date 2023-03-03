using System;
using System.Collections.Generic;
namespace SmartDataGeneratorLogic
{
	public delegate void UIDelegate(string msg);

	interface IDataGenerator
	{
		event UIDelegate UpdateUI;

		string Generate();
	}
}
