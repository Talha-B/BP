using BPPayment.Enums;

namespace BPPayment.Services
{
    public interface IPaymentProcessor
    {
        Task<PaymentResult> Pay(Site site, int pumpNumber, FuelType fuelType, decimal amount, string cardDetails);

        Task<PaymentResult?> GetPaymentResult(Guid paymentTransactionId);
    }
}