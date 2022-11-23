using BPPayment.Enums;

namespace BPPayment.Services
{
    public class PaymentProcessor : IPaymentProcessor
    {
        private readonly List<PaymentResult> _paymentResults = new();

        public async Task<PaymentResult> Pay(Site site, int pumpNumber, FuelType fuelType, decimal amount, string cardDetails)
        {
            // in reality would process payment and store result somewhere
            // here we return a dummy result
            var paymentResult = new PaymentResult()
            {
                Date = DateTime.Now,
                Site = site,
                FuelType = fuelType,
                PricePerLitre = site.CurrentPrices.FirstOrDefault(f => f.Key == fuelType).Value,
                PumpNumber = pumpNumber,
                TotalAmount = amount,
                PaymentId = Guid.NewGuid(),
                Last4DigitsOfPaymentCard = cardDetails.Substring(cardDetails.Length - 4),
                Success = true
            };

            _paymentResults.Add(paymentResult);

            return await Task.FromResult(paymentResult);
        }

        public async Task<PaymentResult?> GetPaymentResult(Guid paymentTransactionId)
        {
            return 
                await Task.FromResult(_paymentResults.FirstOrDefault(p => p.PaymentId == paymentTransactionId));
        }
    }
}