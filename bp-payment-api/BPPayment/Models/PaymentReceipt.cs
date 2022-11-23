using BPPayment.Enums;

namespace BPPayment
{
    public class PaymentReceipt
    {
        public string Location { get; set; }

        public DateTime Date { get; set; }

        public int PumpNumber { get; set; }

        public FuelType FuelType { get; set; }

        public double PricePerLitre { get; set; }

        public double LitresFuelled { get; set; }

        public decimal TotalAmount { get; set; }

        public Guid PaymentTransactionId { get; set; }

        public string Last4DigitsOfPaymentCard { get; set; }
    }
}