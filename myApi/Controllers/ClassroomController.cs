using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using myCorp.Models;

namespace myCorp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ClassroomController : ControllerBase
    {
        public static List<Student> Students = new List<Student>
        {
        new Student{
            Id=Guid.NewGuid().ToString(),
            Name = "ยาบ้าอัดเม็ด",
            Age = 250,
            ProfileImage="https://f.ptcdn.info/329/045/000/oc771kl7cAjKUh984T7-o.jpg",
            
        },
        new Student{
            Id=Guid.NewGuid().ToString(),
            Name = "ยาไอซ์",
            Age = 500,
            ProfileImage="https://f.ptcdn.info/734/053/000/owlcqtx895tULvm1cE-o.jpg",
            
        },
        new Student{
            Id=Guid.NewGuid().ToString(),
            Name = "กัญชา",
            Age = 200,
            ProfileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7K7DIx4jhQc-YP-LrVotdxVumtlZ51FmU2LX6oL4NgfEpl2V6A",
            
        },
        };


         public static List<Pricesx> Prices = new List<Pricesx>
        {
            new Pricesx{
                Id=Guid.NewGuid().ToString(),
                Name = "ยาพารา",
                Price = 10,
                amount = 2,
                
            },
            new Pricesx{
                Id=Guid.NewGuid().ToString(),
                Name = "กาวกระป๋อง",
                Price = 30,
                amount = 1,
                
            },
        };


        [HttpGet]
        public List<Student> GetAllStudents()
        {
            return Students;
        }
        [HttpGet("{id}")]
        public Student GetStudent(string id)
        {
            return Students.Find(it => it.Id == id);
        }
        [HttpPost]
        public void CreateStudent([FromBody]Student newStudent)
        {
         newStudent.Id = Guid.NewGuid().ToString();
          Students.Add(newStudent);
        }
        [HttpPut]
        public void UpdateStudent([FromBody]Student newStudent)
        {
           var oldStudent =  Students.Find(it => it.Id == newStudent.Id);
           Students.Remove(oldStudent);
           Students.Add(newStudent);
        }
        [HttpDelete("{id}")]
        public void DeleteStudent(string id)
        {
            var student = Students.Find(it => it.Id == id);
            Students.Remove(student);

        }
        [HttpPost]
        public void CreatePrice([FromBody]Student newPrie)
        {
         newPrie.Id = Guid.NewGuid().ToString();
          Students.Add(newPrie);
        }
        [HttpPost]
        public void CreatePricesx([FromBody]Pricesx newPrie)
        {
         newPrie.Id = Guid.NewGuid().ToString();
          Prices.Add(newPrie);
        }
       [HttpGet]
        public List<Pricesx> GetAllPrice()
        {
            return Prices;
        }


    }
}
