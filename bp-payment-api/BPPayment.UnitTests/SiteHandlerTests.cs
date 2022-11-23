using NUnit.Framework;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace BPPayment.UnitTests
{
    public class SiteHandlerTests
    {
        [Test]
        public async Task FindSite_WhenGeoLocationMatchesASite_ThatSiteIsReturned()
        {
            // Arrange
            decimal latitude = 50.2m;
            decimal longitude = -10.2m;

            var sut = new SiteHandler();

            // Act
            var site = await sut.FindSite(longitude, latitude);

            // Assert
            Assert.IsNotNull(site);
        }

        [Test]
        public void UnlockPump_WhenSiteNotFound_ExceptionThrown()
        {
            // Arrange
            var sut = new SiteHandler();

            // Act/Assert
            Assert.ThrowsAsync<Exception>(async () => await sut.UnlockPump(new System.Guid(), 1)); // the dummy site has an actual guid, hence why this would fail
        }

        [Test]
        public async Task UnlockPump_WhenPumpNotFound_ExceptionThrown()
        {
            // Arrange
            var sut = new SiteHandler();
            decimal dummyLatitude = 50.2m;
            decimal dummyLongitude = -10.2m;

            var site = await sut.FindSite(dummyLongitude, dummyLatitude);
            
            // Act/Assert
            Assert.ThrowsAsync<Exception>(async () => await sut.UnlockPump(site.SiteId, 99)); // 99 is not a valid pump on the dummy site set up
        }

        [Test]
        public async Task UnlockPump_WhenValidDetails_PumpIsUnlocked()
        {
            // Arrange
            var sut = new SiteHandler();
            decimal dummyLatitude = 50.2m;
            decimal dummyLongitude = -10.2m;
            var pumpNumber = 1;

            var site = await sut.FindSite(dummyLongitude, dummyLatitude);

            // Act
            await sut.UnlockPump(site.SiteId, pumpNumber);

            // Assert
            Assert.IsTrue(site.Pumps.First(p => p.Number == pumpNumber).Status == Enums.PumpStatus.Unlocked);
        }
    }
}