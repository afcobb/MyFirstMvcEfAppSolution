namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserNamerequired : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Users", "UserNameUniqueIndex");
            AlterColumn("dbo.Users", "UserName", c => c.String(nullable: false, maxLength: 20));
            CreateIndex("dbo.Users", "UserName", unique: true, name: "UserNameUniqueIndex");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Users", "UserNameUniqueIndex");
            AlterColumn("dbo.Users", "UserName", c => c.String(maxLength: 20));
            CreateIndex("dbo.Users", "UserName", unique: true, name: "UserNameUniqueIndex");
        }
    }
}
