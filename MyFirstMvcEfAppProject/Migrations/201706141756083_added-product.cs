namespace MyFirstMvcEfAppProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedproduct : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        VendorId = c.Int(nullable: false),
                        Name = c.String(nullable: false, maxLength: 150),
                        VendorPartNumber = c.String(nullable: false, maxLength: 50),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Unit = c.String(maxLength: 10),
                        PhotoPath = c.String(maxLength: 255),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Products");
        }
    }
}
