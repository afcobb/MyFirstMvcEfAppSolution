using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MyFirstMvcEfAppProject.Models {

    public class User {

        public int ID { get; set; }
        [Required]
        [Index("UserNameUniqueIndex", IsUnique = true)]
        [MaxLength(20)]
        public string UserName { get; set; }
        [Required]
        [MaxLength(10)]
        public string Password { get; set; }
        [Required]
        [MaxLength(20)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(20)]
        public string LastName { get; set; }
        [MaxLength(12)]
        public string Phone { get; set; }
        [Required]
        [MaxLength(75)]
        public string Email { get; set; }
        public bool IsReviewer { get; set; }
        public bool IsAdmin { get; set; }   
    }
}