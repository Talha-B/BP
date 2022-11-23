using Microsoft.AspNetCore.Mvc;

namespace BPPayment.Services
{
    public interface ISiteHandler
    {
        Task<Site> FindSite(decimal longitude, decimal latitude);

        Task<Site> FindSite(Guid siteId);

        Task<UnlockResult> UnlockPump(Guid siteId, int pumpNumber);

        Task<double> LockPump(Guid siteId, int pumpNumber);
    }
}
