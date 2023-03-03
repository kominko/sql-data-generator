using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SmartDataGenerator
{
	class Utility
	{
		//why static? to make sure random is really random
		static Random random = new Random();
		public static int Random(int limit)
		{
			int randomNumber = random.Next(0, limit);
			return randomNumber;
		}
	}
}
