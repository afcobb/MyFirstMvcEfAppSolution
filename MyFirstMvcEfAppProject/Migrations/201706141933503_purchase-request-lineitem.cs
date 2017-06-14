namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class purchaserequestlineitem : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "Unit", c => c.String(nullable: false, maxLength: 10));
            CreateIndex("dbo.Products", "VendorId");
            CreateIndex("dbo.Vendors", "Code", unique: true, name: "VendorCodeUniqueIndex");
            CreateIndex("dbo.purchaseRequests", "UserID");
            AddForeignKey("dbo.Products", "VendorId", "dbo.Vendors", "ID", cascadeDelete: true);
            AddForeignKey("dbo.purchaseRequests", "UserID", "dbo.Users", "ID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.purchaseRequests", "UserID", "dbo.Users");
            DropForeignKey("dbo.Products", "VendorId", "dbo.Vendors");
            DropIndex("dbo.purchaseRequests", new[] { "UserID" });
            DropIndex("dbo.Vendors", "VendorCodeUniqueIndex");
            DropIndex("dbo.Products", new[] { "VendorId" });
            AlterColumn("dbo.Products", "Unit", c => c.String(maxLength: 10));
        }
    }
}
