import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CallApiProvider Provider');
  }

  public GetAllProducts()
  {
      return this.http.get('https://localhost:5001/api/Products/GetAllProducts');
  }
  public GetProductbyId(id :string){
    return this.http.get('https://localhost:5001/api/Prosucts/GetProductbyId/'+ id);
  }
  public CreateProduct(newProduct : any){
    return this.http.post('https://localhost:5001/api/Products/CreateProduct',newProduct);
  }
  public UpdateProduct(newProduct : any){
    return this.http.put('https://localhost:5001/api/Prosucts/UpdateProduct',newProduct);
  }
  // public DeleteStudent(id:string){
  //   return this.http.delete('https://localhost:5001/api/Prosucts/DeleteStudent/'+ id);
  // }

  public AddToCart(newCart : any) {
    return this.http.post('https://localhost:5001/api/ShoppingCart/Create',newCart);
  }
}
