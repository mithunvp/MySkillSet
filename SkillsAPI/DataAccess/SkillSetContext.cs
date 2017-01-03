using SkillsAPI.Models;
using System.Data.Entity;

namespace SkillsAPI.DataAccess
{
    public class SkillSetContext : DbContext
    {
        public SkillSetContext() : base("name=skillsconnectionstring")
        {

        }        

        public DbSet<Skills> Skills { get; set; }
    }
}