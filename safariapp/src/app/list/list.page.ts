import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import {AlertController, LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Logistic } from '../../interfaces/index';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: Logistic [];
  selectedEvent: any;
  isSelected: any;

  constructor(private router: Router, private alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    private calendar: Calendar, private storage: Storage ) {
      this.monthNames = ['Ene', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct' , 'Nov', 'Dec'];
      this.date = new Date ();
     }

  ngOnInit() {
    console.log('cargando');
    this.refresh();
  }

  gotoaddRoute(action, codelg) {
    const item = {
      action: action,
      CODIGO_LOG: codelg
    };
    this.router.navigate(['/addroute', item]);
  }
  // refresh
  async  refresh() {
    const alert = await this.loadCtrl.create({
      message: `Cargando ...`,
      spinner: 'bubbles'
    });

    await alert.present()
      .then(() => { this.loadEventThisMonth(); } )
      .then(() => { alert.dismiss(); } )
      .then(() => { console.log('Refesh'); });
  }

  // metodos calendario
  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
    const firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for ( let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
    const thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i + 1);
    }
    const lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    const nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
    for (let i = 0; i < ( 6 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push( i + 1);
    }
    const totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if ( totalDays < 36) {
      for ( let i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }
  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }
  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  loadEventThisMonth() {
    this.eventList = new Array();
    this.storage.get('listlog').then( (val) => {
      this.eventList = val;
     }).then(() => {
      this.getDaysOfMonth();
     }).then( () => {
      this.selectDate(this.date.getDate());
     });
  }
  StringtoDate(value) {
    return new Date (value);
  }
  checkEvent(day) {
    let hasEvent = false;
    const thisDate1 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
    const thisDate2 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
    // console.log( this.eventList != null );
    if ( this.eventList != null ) {
      this.eventList.forEach(et => {
        if (( new Date(et.FECHA_LOG)  >= thisDate1) && ( new Date (et.FECHA_LOG) <= thisDate2)) {
          hasEvent = true;
        }
      });
    }
    return hasEvent;
  }

  selectDate(day) {
    this.isSelected = false;
    this.selectedEvent = new Array();
    const thisDate1 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
    const thisDate2 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
  //  console.log( this.eventList != null );
    if ( this.eventList != null ) {
      this.eventList.forEach(et => {
        if (( new Date(et.FECHA_LOG)  >= thisDate1) && ( new Date (et.FECHA_LOG) <= thisDate2)) {
          this.isSelected = true;
          this.selectedEvent.push(et);
        }
      });
    }
  }

  async deleteEvent(ilog, fecha) {
    console.log('index', ilog, fecha);
    const alert = await this.alertCtrl.create({
      header: 'Eliminar Recorrido',
      message: 'Realmente desea eliminar Recorrido?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            let indexj = -1;
            for (let index = 0; index < this.eventList.length; index++) {
              const logistic = this.eventList[index];
              if ( logistic.CODIGO_LOG === ilog) {
                indexj = index;
              }
            }
            this.eventList.splice(indexj, 1 );
            console.log(this.eventList, 'preuba');
            this.storage.set('listlog', this.eventList);
            this.selectDate(new Date(fecha).getDate());
          }
        }
      ]
    });

    await alert.present();
  }
}
