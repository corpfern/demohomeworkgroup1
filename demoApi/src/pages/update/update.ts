import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  newStudent: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder, public callApi: CallApiProvider) {
    this.newStudent = fb.group({
      'id': null,
      'name': null,
      'age': null,
      'profileImage': null,
    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UpdatePage');
    let oldStudent = this.navParams.get('student');
    this.newStudent.setValue(oldStudent);
    
    
  }
  update(){
     this.callApi.UpdateStudent(this.newStudent.value)
     .subscribe(data => {
       console.log("Update.");
       this.navCtrl.pop();
       
     })
  }

}
