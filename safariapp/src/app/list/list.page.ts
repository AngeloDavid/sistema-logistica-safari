import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/index';
import {AlertController, LoadingController, Events} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Logistic } from '../../interfaces/index';
import { RouteService } from '../api/route.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';
import { Global } from '../api/params';
import { isUndefined } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  date: any;
  dtoday: any = new Date();
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  selectDay: any;
  eventList: Logistic [];
  selectedEvent: any;
  isSelected: any;
  user: User;
  urlservice: string;
  datei = new Date();
  datef = new Date();
  // constructor
  constructor(private router: Router, private routeParms: ActivatedRoute, private alertCtrl: AlertController,
    public loadCtrl: LoadingController, private storage: Storage,
    public routersv: RouteService,
    public events: Events,
    private callNumber: CallNumber,
    private global: Global ) {
      this.urlservice = global.urlApi;
      this.monthNames = ['Ene', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct' , 'Nov', 'Dec'];
      this.date = new Date ();
      this.datei.setMonth(this.date.getMonth() - 6);
      this.datef.setMonth(this.date.getMonth() + 6);
      this.datei.setDate(1);
      this.datef.setDate(0);
      this.storage.get('userlogin').then((val) => {
        this.user = val;
      });
      this.events.subscribe('userlogin', (user) => {
        this.user = user;
        console.log(this.user);
      });
      this.routeParms.params.subscribe(( data: any) => {
        if ( Object.keys(data).length !== 0) {
          if ( data.refreshlist === 1 ) {
            if ( data.datenow != null ) {
              this.date = new Date ( data.datenow);
              this.dtoday = new Date (data.datenow);
            }
            this.refresh();
          }
        }
      });
     }

  ngOnInit() {
    console.log('cargando');
    this.refresh();
  }

  gotoaddRoute(action, codelg) {
    const item = {
      action: action,
      CODIGO_LOG: codelg,
      dateNow: this.dtoday >=  this.date ? this.dtoday : this.date
    };
    this.router.navigate(['members', 'addroute', item]);
  }
  // refresh
  async  refresh() {
    const alert = await this.loadCtrl.create({
      message: `Cargando ...`,
      spinner: 'bubbles'
    });

    await alert.present();
    this.loadEventThisMonth(alert);
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
    if ( this.datei < this.date) {
      this.selectDay = null;
      this.getDaysOfMonth();
    }
  }
  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    if (this.datef > this.date) {
      this.selectDay = null;
    this.getDaysOfMonth();
    }
  }

  loadEventThisMonth(alert: any ) {
    this.eventList = new Array();
    this.getDaysOfMonth();
    // coregir este detalle para que sea por anio
    this.routersv.getalllogistcs( moment( this.datei.toISOString(), moment.ISO_8601).format('YYYY-MM-DD'),
    moment( this.datef.toISOString(), moment.ISO_8601).format('YYYY-MM-DD'), this.user.CODIGO_NOMINA)
    .subscribe((data: any) => {
      if ( data.CODE === 200 ) {
        this.eventList = data.value;
        this.selectDate(this.date.getDate());
        alert.dismiss();
      } else {
        alert.dismiss();
        console.log('cambiar');
      }
    },
    (error: any) => {
      alert.dismiss();
      this.presentAlert('ERROR', 'Problemas de conexion con el servidor');
    }
    );

    // this.storage.get('listlog').then( (val) => {
    //   console.log(val);
    //   this.eventList = val;
    //  }).then(() => {
    //   this.getDaysOfMonth();
    //  }).then( () => {
    //   this.selectDate(this.date.getDate());
    //  });
  }
  StringtoDate(value) {
    return new Date (value.substring(0, 10) + ' ' + value.substring(11, 16));
  }
  checkEvent(day) {
    let hasEvent = false;
    const thisDate1 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
    const thisDate2 = new Date ( this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
    // console.log( this.eventList != null );
    if ( this.eventList != null ) {
      this.eventList.forEach(et => {
        if ( et.FECHA_LOG != null ) {
          const dt = et.FECHA_LOG.substring(0, 10) + ' ' + et.FECHA_LOG.substring(11, 16);
          if (( new Date( dt )  >= thisDate1) && ( new Date (dt) <= thisDate2)) {
            hasEvent = true;
          }
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
    this.dtoday = thisDate1;
    this.selectDay = day;
    if ( this.eventList != null ) {
      this.eventList.forEach(et => {
        if ( et.FECHA_LOG != null ) {
          const dt = et.FECHA_LOG.substring(0, 10) + ' ' + et.FECHA_LOG.substring(11, 16);
          if (( new Date(dt)  >= thisDate1) && ( new Date (dt) <= thisDate2)) {
            this.isSelected = true;
            this.selectedEvent.push(et);
          }
        }
      });
    }
  }
  llamar(numbercall) {
    if ( numbercall != null) {
      this.callNumber.callNumber(numbercall, true)
      .then(res => {
        this.presentAlert('LLamada Exitosa', '');
      })
      .catch(err => { this.presentAlert('error', err); } );
    }
  }
  async deleteEvent(ilog, fecha) {
    console.log('index', ilog, fecha);
    const alert = await this.alertCtrl.create({
      message: '¿Desea cancelar este recorrido?',
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

  async presentAlert(title: string, ms: string) {
    const alert = await this.alertCtrl.create({
      subHeader: title,
      message: ms,
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
