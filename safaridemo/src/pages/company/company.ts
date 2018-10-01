import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list';
/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  companies: Array<{id:number,    
    name:string,           
    route:string,
    turno:string,
    time:string,    
    date?:Date,
    isarrive:boolean,
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
    this.companies=[{
      id:1,
      name:'GARLANDSECUADOR S.A.',
      route:'Norte',
      turno:'2',
      time:'23:45',
      date:new Date(2018, 9, 7),
      isarrive:false
    }];
  }

  irlist(){
    this.navCtrl.push(ListPage);
  }
}
