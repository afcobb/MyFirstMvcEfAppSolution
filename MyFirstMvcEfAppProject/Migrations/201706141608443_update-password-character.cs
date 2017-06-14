namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatepasswordcharacter : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Users", "Password", c => c.String(nullable: false, maxLength: 10));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Users", "Password", c => c.String());
        }
    }
}
