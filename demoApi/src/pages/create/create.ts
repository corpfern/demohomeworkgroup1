import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  newProduct: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public CallApi: CallApiProvider) {
    this.newProduct = fb.group({
      'id': null,
      'productName': [null,Validators.required],
      'price': [null,Validators.required],
      'pieces': 0,

    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CreatePage');
  }

  createProduct() {
    this.CallApi.CreateProduct(this.newProduct.value)
    .subscribe(data => {
      console.log("Create.");
      this.navCtrl.pop();
    });
  }
}
