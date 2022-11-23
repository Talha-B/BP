using BPPayment.Enums;
using BPPayment.Services;

namespace BPPayment
{
    public class SiteHandler : ISiteHandler
    {
        private readonly List<Site> _dummySites = new();

        public SiteHandler()
        {
           
        }

        public async Task<Site> FindSite(decimal longitude, decimal latitude)
        {
            SetupDummySites();

            return await Task.FromResult(_dummySites.FirstOrDefault());
        }

        private void SetupDummySites()
        {
            var pumps = new List<Pump>();

            for (int i = 1; i < 11; i++)
            {
                pumps.Add(new Pump()
                {
                    Status = PumpStatus.Locked,
                    Number = i
                });
            }

            _dummySites.Clear();

            _dummySites.Add(new Site()
            {
                CurrentPrices = new Dictionary<FuelType, double>()
                {
                    { FuelType.Unleaded, 159.9 },
                    { FuelType.Diesel, 180.8 },
                    { FuelType.UltimateUnleaded, 169.9 },
                    { FuelType.UltimateDiesel, 190.8 }
                },
                Location = "22 Petrol Station Road, London",
                Pumps = pumps,
                SiteId = Guid.NewGuid()
            });
        }

        public async Task<Site> FindSite(Guid siteId)
        {
            return await Task.FromResult(_dummySites.FirstOrDefault(s => s.SiteId == siteId));
        }

        public async Task<UnlockResult> UnlockPump(Guid siteId, int pumpNumber)
        {
            var site = await FindSite(siteId);
            if (site == null)
            {
                throw new Exception("Site not found");
            }

            var pump = site.Pumps.FirstOrDefault(p => p.Number == pumpNumber);

            if (pump == null)
            {
                throw new Exception("Pump not found");
            }

            pump.Status = PumpStatus.Unlocked;
            pump.LitresFuelled = 2; // random dummy value for testing.. in reality, this value would not be set at this time - it would be retrieved at the end of the whole transaction from an API that returns real time value of how much fuel has been used

            return new UnlockResult()
            {
                Success = true
            };
        }

        public async Task<double> LockPump(Guid siteId, int pumpNumber)
        {
            var site = await FindSite(siteId);
            if (site == null)
            {
                throw new Exception("Site not found");
            }

            var pump = site.Pumps.FirstOrDefault(p => p.Number == pumpNumber);

            if (pump == null)
            {
                throw new Exception("Pump not found");
            }

            pump.Status = PumpStatus.Locked;

            var litresFuelled = pump.LitresFuelled;
            pump.LitresFuelled = 0;

            return await Task.FromResult(litresFuelled);
        }
    }
}