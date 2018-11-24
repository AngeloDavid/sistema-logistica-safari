import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import {AlertController, Events} from '@ionic/angular';
import {Logistic} from '../../interfaces/index';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddroutePage implements OnInit {

  event = { title: '', location: '', message: '', startDate: '', endDate: '' };
  datenow = new Date();
  now = moment();
  logistica: Logistic = {
    CODIGO_LOG: '',
    CODIGO_CLIE: '',
    CODIGO_NOMINA: '',
    TIPO: 'I',
    FECHA_LOG: this.datenow.toISOString(),
    TURNO_LOG: this.datenow.toISOString(),
    OBSERVACION_CLIENTE: ''
  };
  Listlg: Logistic [] = [];
  constructor(private router: Router,
    public alertCtrl: AlertController,
    private calendar: Calendar,
    private storage: Storage) {
      this.storage.get('userlogin').then((val) => {
        this.logistica.CODIGO_CLIE = val.CODIGO_CLIE;
        this.logistica.CODIGO_NOMINA = val.CODIGO_NOMINA;
        this.logistica.FECHA_LOG  = moment(this.now.format(), moment.ISO_8601).format();
        this.logistica.TURNO_LOG  = moment(this.now.format(), moment.ISO_8601).format();
      });
      this.storage.get('listlog').then( (val) => {
          this.Listlg = val;
       });
   }

  ngOnInit() {
  }

  gotoaddRoute() {
    this.router.navigate(['/list']);
  }

  async save() {
    this.Listlg.push(this.logistica);
    this.storage.set('listlog', this.Listlg);
    this.router.navigate(['/list']);
    console.log('lsitaddr', this.Listlg );
  /*  this.event.title = this.logistica.TIPO === 'I' ? 'Ingreso' : 'Salida' ;
    this.event.location = this.logistica.OBSERVACION_CLIENTE;
    this.event.startDate = this.logistica.FECHA_LOG;
    this.event.endDate = this.logistica.FECHA_LOG;*/

    /*this.calendar.createEvent(this.event.title, this.event.location,
      this.event.message, new Date(this.event.startDate), new Date(this.event.endDate))
      .then(
      (msg) => {
        const alert =  this.alertCtrl.create({
          header: 'Success!',
          subHeader: 'Event saved successfully',
          buttons: ['OK']
        });
      },
      (err) => {
        const alert = this.alertCtrl.create({
          header: 'Failed!',
          subHeader: err,
          buttons: ['OK']
        });
      }
      );*/
  }

}
