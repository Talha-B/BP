namespace BPPayment
{
    public class TransactionResult
    {
        public PaymentReceipt Receipt { get; set; }

        public bool Success { get; set; }

        public string ErrorMessage { get; set; }
    }
}