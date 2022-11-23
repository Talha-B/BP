using BPPayment.Enums;

namespace BPPayment
{
    public class PaymentResult
    {
        public bool Success { get; set; }

        public string ErrorMessage { get; set; }

        public Site Site { get; set; }

        public DateTime Date { get; set; }

        public int PumpNumber { get; set; }

        public FuelType FuelType { get; set; }

        public double PricePerLitre { get; set; }

        public decimal TotalAmount { get; set; }

        public Guid PaymentId { get; set; }

        public string Last4DigitsOfPaymentCard { get; set; }
    }
}