using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MyFirstMvcEfAppProject.Models {
    public class ProductEditView {
        public int ID { get; set; }
        [Required]
        [MaxLength(150)]
        public string Name { get; set; }
        [Required]
        [MaxLength(50)]
        public string VendorPartNumber { get; set; }
        [Required]
        [Range(0, 1000)]
        public decimal Price { get; set; }
        [Required]
        [MaxLength(10)]
        public string Unit { get; set; }
        [MaxLength(255)]
        public string PhotoPath { get; set; }

        public int VendorId { get; set; }
        public List<Vendor> Vendors { get; set; }
    }
}