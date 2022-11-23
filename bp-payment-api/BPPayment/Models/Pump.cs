using BPPayment.Enums;

namespace BPPayment
{
    public class Pump
    {
        public int Number { get; set; }

        public PumpStatus Status { get; set; }

        public double LitresFuelled { get; set; }
    }
}