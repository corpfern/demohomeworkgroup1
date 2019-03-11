import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CallApiProvider } from "../../providers/call-api/call-api";
import { FormGroup, FormBuilder } from "@angular/forms";
import { identifierModuleUrl } from "@angular/compiler";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  products: any;
  newCart: FormGroup;
  productName: any = [];
  price: any = [];
  sum: any = [];
  constructor(
    public fb: FormBuilder,
    public navCtrl: NavController,
    public CallApi: CallApiProvider
  ) {
    this.newCart = fb.group({
      'sum': null
    });
  }

  ionViewDidEnter() {
    this.get();
  }

  get() {
    this.CallApi.GetAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  goCreatePage() {
    console.log("test");
    this.navCtrl.push("CreatePage");
  }

  carts(productName: string, price: any,sum:any) {
    this.productName.push(productName);
    console.log(productName);
    this.price.push(price);
    console.log(price);
    this.sum.push(this.newCart.get('sum').value)
    console.log(this.sum);
    

  }

  addToCart() {
    this.navCtrl.push("CartsPage", {productName: this.productName,price: this.price,sum:this.sum});
  }
}
