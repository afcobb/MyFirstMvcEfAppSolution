using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MyFirstMvcEfAppProject.Models {
    public class lineItem {
        [Required]
        public int ID { get; set; }
        public int RequestID { get; set; }
        public int ProductID { get; set; }
        [Required]
        public int Quantity { get; set; }

    }
}