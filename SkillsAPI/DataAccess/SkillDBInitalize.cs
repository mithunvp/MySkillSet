using System.Data.Entity;
using SkillsAPI.Models;

namespace SkillsAPI.DataAccess
{
    public class SkillDBInitalize : DropCreateDatabaseIfModelChanges<SkillSetContext>
    {
        protected override void Seed(SkillSetContext context)
        {
            context.Skills.Add(new Skills() {Id =1, Name = "Web API", Description = "Using ASP.NET Web API 2 " });
            context.SaveChanges();
            base.Seed(context);
        }
    }
}