using BPPayment.Enums;
using BPPayment.Services;
using Microsoft.AspNetCore.Mvc;

namespace BPPayment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly ISiteHandler _siteHandler;
        private readonly IPaymentProcessor _paymentProcessor;

        private readonly ILogger<PaymentController> _logger;

        public PaymentController(ISiteHandler siteHandler, IPaymentProcessor paymentProcessor, ILogger<PaymentController> logger)
        {
            _siteHandler = siteHandler;
            _paymentProcessor = paymentProcessor;
            _logger = logger;
        }

        [HttpGet("FindSite")]
        public async Task<ActionResult<Site>> FindSite(decimal longitude, decimal latitude)
        {
            var site = await _siteHandler.FindSite(longitude, latitude);

            if (site == null)
            {
                return new NotFoundObjectResult("Site not found");
            }

            return site;
        }

        [HttpPost("Pay")]
        public async Task<ActionResult<PaymentResult>> Pay([FromBody] PaymentRequest request)
        {
            var site = await _siteHandler.FindSite(request.SiteId);

            if (site == null)
            {
                return new BadRequestObjectResult("Site not found");
            }

            var pump = site.Pumps.FirstOrDefault(p => p.Number == request.PumpNumber);

            if (pump == null)
            {
                return new BadRequestObjectResult("Pump number not present at site");
            }

            if (pump.Status == PumpStatus.Unlocked)
            {
                return new BadRequestObjectResult("Pump is already in use");
            }

            if (request.Amount <= 0)
            {
                return new BadRequestObjectResult("Invalid amount provided");
            }

            var result = await _paymentProcessor.Pay(site, request.PumpNumber, request.FuelType, request.Amount, request.CardDetails);

            return result;
        }

        [HttpPost("UnlockPump")]
        public async Task<ActionResult<UnlockResult>> UnlockPump([FromBody] UnlockRequest request)
        {
            var transaction = await _paymentProcessor.GetPaymentResult(request.PaymentId);

            if (transaction == null)
            {
                return new UnlockResult()
                {
                    Success = false,
                    ErrorMessage = "Payment transaction not found"
                };
            }

            if (transaction.Success)
            {
                return await _siteHandler.UnlockPump(transaction.Site.SiteId, transaction.PumpNumber);
            }

            return new UnlockResult()
            {
                Success = false,
                ErrorMessage = "An error occurred unlocking pump"
            };
        }

        [HttpPost("FinishTransaction")]
        public async Task<TransactionResult> FinishTransaction([FromBody] FinaliseTransactionRequest request)
        {
            var transaction = await _paymentProcessor.GetPaymentResult(request.PaymentId);

            if (transaction != null)
            {
                var litresFuelled = await _siteHandler.LockPump(transaction.Site.SiteId, transaction.PumpNumber);

                var result = new TransactionResult()
                {
                    Success = true,
                    Receipt = new PaymentReceipt()
                    {
                        TotalAmount = transaction.TotalAmount,
                        PumpNumber = transaction.PumpNumber,
                        Date = transaction.Date,
                        FuelType = transaction.FuelType,
                        LitresFuelled = litresFuelled,
                        PricePerLitre = transaction.PricePerLitre,
                        Location = transaction.Site.Location,
                        PaymentTransactionId = transaction.PaymentId,
                        Last4DigitsOfPaymentCard = transaction.Last4DigitsOfPaymentCard
                    }
                };

                return result;
            }

            // there probably has to be a way for the pump to auto-lock after a duration if the transaction cannot be found (and the pump is in fact been unlocked)

            return new TransactionResult()
            {
                Success = false,
                ErrorMessage = "Payment not found"
            };
        }
    }
}