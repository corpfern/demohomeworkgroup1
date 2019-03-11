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
    public class ShoppingCartController : ControllerBase
    {
        public static List<Cart> Cart = new List<Cart>
        {

        };
        [HttpGet]
        public List<Cart> GetAll()
        {
            return Cart;
        }

        [HttpPost]
        // เพิ่มสินค้าในตะกร้า
        public void Create([FromBody]Cart newCart)
        {
            // newCart.Id = Guid.NewGuid().ToString();
            Cart.Add(newCart);
        }

        [HttpPut]
        // แก้ไขรายการในตะกร้าสินค้า
        public void Update([FromBody]Cart newCart)
        {
            var oldCart = Cart.Find(it => it.Id == newCart.Id);
            Cart.Remove(oldCart);
            Cart.Add(newCart);
        }
        
        [HttpDelete("{id}")]
        // ลบสินค้าในตะกร้า
        public void Delete(string id)
        {
            var carts = Cart.Find(it => it.Id == id);
            Cart.Remove(carts);
        }
    }
}
