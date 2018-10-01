import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employeover',
  templateUrl: 'employeover.html',
})
export class EmployeoverPage {
  personal;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personal=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeoverPage');
  }

}
