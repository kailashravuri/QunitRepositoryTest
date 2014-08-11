using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace QunitcodeTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void simpleTest()
        {
            int testValue = 5;
            Assert.Equals(testValue, 5);
        }
    }
}
