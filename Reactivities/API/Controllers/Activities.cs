/* 14 dependency injection */

using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        // private readonly DataContext _context;
        private readonly DataContext context;
        public ActivitiesController(DataContext context)
        {
            // _context = context;
            this.context = context;
        }
    }
}