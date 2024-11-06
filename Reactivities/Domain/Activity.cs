using System.Data.Common;

namespace Domain
{
    public class Activity
    {
        // Id will let entity framework know that Guid ID is the primary key when created. Guid means Globally unique identifier. 
        // Entity framework need these public to read with setters and getters.
       public Guid Id { get; set; } 
       public string Title { get; set; }
       public DateTime Date { get; set; }
       public string Description { get; set; }
       public string Category { get; set; }
       public string City { get; set; }
       public string Venue { get; set; }
    }
}