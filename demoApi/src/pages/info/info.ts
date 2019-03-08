import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  id: string
  student: FormGroup;
  Total: any
  num: any
  price: number
  constructor(public navCtrl: NavController, public navParams: NavParams, public callApi: CallApiProvider, public fb: FormBuilder) {
    this.student = fb.group({
      'id': null,
      'name': null,
      'age': Number,
      'profileImage': null


    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    this.id = this.navParams.get('id');
    this.get();
    this.price = this.student.get('age').value;
    console.log(this.price);
    console.log(this.Total);


  }

  get() {
    this.callApi.GetStudent(this.id).subscribe(data => {
      this.student.setValue(data);
      console.log(this.student.value);
    })

  }
  goUpdate() {
    this.navCtrl.push('UpdatePage', { student: this.student.value });
  }
  total() {
    //this.callApi.CreateStudent(this.student.value,)
    //this.navCtrl.push('CartPage', { totals: this.Total });
    this.Total = this.num * this.student.get('age').value;
    //this.navCtrl.pop();
  }
  create() {
    this.callApi.CreatePricesx(this.student.value,)
      .subscribe(data => {
        console.log("Createted");
        this.navCtrl.pop();
      })
     
  }
}
