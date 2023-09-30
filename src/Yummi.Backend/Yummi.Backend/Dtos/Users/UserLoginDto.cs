﻿using System.ComponentModel.DataAnnotations;

namespace Yummi.Backend.Dtos.Categoria
{
    public class UserLoginDto
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
