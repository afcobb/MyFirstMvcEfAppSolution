using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace MyFirstMvcEfAppProject.Models {
    public class PurchaseRequestLineItem {
        public int ID { get; set; }
        [Range(0,1000)]
        [DefaultValue(1)]
        public int Quantity { get; set; }

        public int PurchaseRequestId { get; set; }
        public virtual purchaseRequest purchaseRequest { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }


    }
}