namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Usernameunique : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Users", "UserName", unique: true, name: "UserNameUniqueIndex");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Users", "UserNameUniqueIndex");
        }
    }
}
