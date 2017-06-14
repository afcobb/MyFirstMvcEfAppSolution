using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MyFirstMvcEfAppProject.Models {
    public class purchaseRequest {
        [Required]
        public int ID { get; set; }
        [Required]
        public int UserID { get; set; }
        [MaxLength(100)]
        public string Description { get; set; }
        [Required]
        [MaxLength(255)]
        public string Justification { get; set; }
        public DateTime DateNeeded { get; set; }
        [MaxLength(25)]
        public string DeliveryMode { get; set; }
        [Required]
        public bool DocsAttached { get; set; }
        [MaxLength(10)]
        public string Status { get; set; }
        [Required]
        public decimal Total { get; set; }
        [Required]
        public DateTime SubmittedDate { get; set; }
    }
}