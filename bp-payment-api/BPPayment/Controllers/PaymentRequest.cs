using BPPayment.Enums;

namespace BPPayment.Controllers
{
    public class PaymentRequest
    {
        public Guid SiteId { get; set; }

        public int PumpNumber { get; set; }

        public FuelType FuelType { get; set; }

        public decimal Amount { get; set; }

        public string CardDetails { get; set; }
    }
}