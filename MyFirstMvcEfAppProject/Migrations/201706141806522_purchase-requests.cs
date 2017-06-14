namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class purchaserequests : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.purchaseRequests",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserID = c.Int(nullable: false),
                        Description = c.String(maxLength: 100),
                        Justification = c.String(nullable: false, maxLength: 255),
                        DateNeeded = c.DateTime(nullable: false),
                        DeliveryMode = c.String(maxLength: 25),
                        DocsAttached = c.Boolean(nullable: false),
                        Status = c.String(maxLength: 10),
                        Total = c.Decimal(nullable: false, precision: 18, scale: 2),
                        SubmittedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.purchaseRequests");
        }
    }
}
