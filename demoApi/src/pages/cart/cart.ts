import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  totals: any
  total:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public callApi: CallApiProvider, public fb: FormBuilder) {
    
  }

  ionViewDidLoad() {
    this.get();


  }
  get() {
    this.callApi.GetAllPrice().subscribe(data => {
      this.totals = data;
      console.log(this.totals);

    });
  }
}