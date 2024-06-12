using Microsoft.EntityFrameworkCore;

namespace travel_blog_backend.Model
{
    public class TravelBlogDbContext : DbContext
    {
        public TravelBlogDbContext(DbContextOptions<TravelBlogDbContext> options) : base(options)
        {

        }
        public DbSet<Contact> Contacts { get; set; }

    }
}
