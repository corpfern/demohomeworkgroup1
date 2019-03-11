import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the CartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carts',
  templateUrl: 'carts.html',
})
export class CartsPage {
  newCart : FormGroup
  id : string
  name:any=[]
  price:any=[]
  sum:any=[]
  totalprice:any=0
  

  constructor(public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
   this.name=navParams.get('productName');
   this.price=navParams.get('price');
   this.sum=navParams.get('sum');

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CartsPage');
    console.log(this.name);
    this.get()
    // this.id = this.navParams.get('id');
    // console.log(this.id);
  }
  get(){
    this.totalPrice();
  }
  totalPrice(){
    for(let index =0; index < this.price.length; index++)
    {
      this.totalprice  += (Number(this.price[index])* Number(this.sum[index]))
    }
  }

}
