using BPPayment.Enums;

namespace BPPayment
{
    public class Site
    {
        public Guid SiteId { get; set; }

        public string Location { get; set; }

        public List<Pump> Pumps { get; set; }

        public Dictionary<FuelType, double> CurrentPrices { get;set;}
    }
}