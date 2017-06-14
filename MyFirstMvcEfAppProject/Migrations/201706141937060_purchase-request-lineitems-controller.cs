namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class purchaserequestlineitemscontroller : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.PurchaseRequestLineItems",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Quantity = c.Int(nullable: false),
                        PurchaseRequestId = c.Int(nullable: false),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Products", t => t.ProductId, cascadeDelete: true)
                .ForeignKey("dbo.purchaseRequests", t => t.PurchaseRequestId, cascadeDelete: true)
                .Index(t => t.PurchaseRequestId)
                .Index(t => t.ProductId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PurchaseRequestLineItems", "PurchaseRequestId", "dbo.purchaseRequests");
            DropForeignKey("dbo.PurchaseRequestLineItems", "ProductId", "dbo.Products");
            DropIndex("dbo.PurchaseRequestLineItems", new[] { "ProductId" });
            DropIndex("dbo.PurchaseRequestLineItems", new[] { "PurchaseRequestId" });
            DropTable("dbo.PurchaseRequestLineItems");
        }
    }
}
