using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public static List<Product> Product = new List<Product>
        {
            new Product{
                Id = Guid.NewGuid().ToString(),
                ProductName ="ยาบ้า",
                  Price = 250,
                  Pieces = 0
            },
            new Product{
                Id = Guid.NewGuid().ToString(),
                ProductName ="ไอซ์",
                  Price = 550,
                  Pieces = 0
            },
            new Product{
                Id = Guid.NewGuid().ToString(),
                ProductName ="กาว",
                  Price = 50,
                  Pieces = 0
            },

        };
        [HttpGet]
        public List<Product> GetAllProducts(){
            return Product;
        }

         [HttpGet("{id}")]
        public Product GetProductbyId(string id){
            return Product.Find(it=>it.Id==id);
        }

        [HttpPost]
        public  void CreateProduct([FromBody]Product newProduct) {
            newProduct.Id = Guid.NewGuid().ToString();
            Product.Add(newProduct);
        }
          [HttpPut]
        public  void UpdateProduct([FromBody]Product newProduct) {
           
            var oldProduct= Product.Find(it=>it.Id==newProduct.Id);
            Product.Remove(oldProduct);
            Product.Add(newProduct);
        }
     }
}
