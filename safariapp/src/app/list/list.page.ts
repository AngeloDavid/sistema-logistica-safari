import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import {AlertController} from '@ionic/angular';
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
  eventList: any;
  selectedEvent: any;
  isSelected: any;

  constructor(private router: Router, private alertCtrl: AlertController,
    private calendar: Calendar, private storage: Storage ) {
      this.monthNames = ['Ene', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct' , 'Nov', 'Dec'];
      this.date = new Date ();
      this.getDaysOfMonth();
      this.loadEventThisMonth();
     }

  ngOnInit() {
  }

  gotoaddRoute() {
    this.router.navigate(['/addroute']);
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
      console.log(this.eventList, 'Evento');
      this.selectDate(this.date.getDate());
     });

    // llamar los recoridos por mes
    /*const startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    this.calendar.listEventsInRange(startDate, endDate).then(
      (msg) => {
        msg.forEach(item => {
          this.eventList.push(item);
        });
      },
      (err) => {
        console.log(err);
      }
    );*/
  }
  StringtoDate(value) {
    return new Date (value);
  }
  checkEvent(day) {
    let hasEvent = false;
    const thisDate1 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
    const thisDate2 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
    this.eventList.forEach(et => {
      if (( new Date(et.FECHA_LOG)  >= thisDate1) && ( new Date (et.FECHA_LOG) <= thisDate2)) {
        hasEvent = true;
      }
    });
    // comprobar eventos por dia
    /*this.eventList.forEach(event => {
      if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) ||
       ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });*/
    return hasEvent;
  }

  selectDate(day) {
    this.isSelected = false;
    this.selectedEvent = new Array();
    const thisDate1 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
    const thisDate2 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
    this.eventList.forEach(et => {
      // console.log(this.date, 'hoy');
      // console.log(typeof  et.FECHA_LOG);
      // console.log( new Date (et.FECHA_LOG), thisDate1, thisDate2);
      // console.log((new Date(et.FECHA_LOG)  <= thisDate1));
      // console.log((new Date(et.FECHA_LOG)  <= thisDate2));
      // console.log ((new Date(et.FECHA_LOG)  >= thisDate1) && (new Date(et.FECHA_LOG) <= thisDate2), 'date1');
      if (( new Date(et.FECHA_LOG)  >= thisDate1) && ( new Date (et.FECHA_LOG) <= thisDate2)) {
        this.isSelected = true;
        // console.log(this.isSelected);
        this.selectedEvent.push(et);
        // console.log('hloa');
      }
    });
    /*
    this.eventList.forEach(event => {
      if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2))
       || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        this.isSelected = true;
        this.selectedEvent.push(event);
      }
    });*/
  }

  async deleteEvent(index) {
    console.log('index', index);
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
            if (index > -1) {
              this.eventList.splice(index, 1 );
              this.storage.set('listlog', this.eventList);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
