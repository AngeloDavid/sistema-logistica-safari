import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import {AlertController, Events} from '@ionic/angular';
import {Logistic} from '../../interfaces/index';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddroutePage implements OnInit {

  event = { title: '', location: '', message: '', startDate: '', endDate: '' };
  datenow = new Date();
  logistica: Logistic = {
    CODIGO_LOG: '',
    CODIGO_CLIE: '',
    CODIGO_NOMINA: '',
    TIPO: 'I',
    FECHA_LOG: this.datenow.toISOString(),
    TURNO_LOG: this.datenow.toISOString(),
    OBSERVACION_CLIENTE: ''
  };
  constructor(private router: Router,
    public alertCtrl: AlertController,
    private calendar: Calendar,
    private storage: Storage) {
      this.storage.get('userlogin').then((val) => {
        this.logistica.CODIGO_CLIE = val.CODIGO_CLIE;
        this.logistica.CODIGO_NOMINA = val.CODIGO_NOMINA;
      });

   }

  ngOnInit() {
  }

  gotoaddRoute() {
    this.router.navigate(['/list']);
  }

  async save() {
    console.log(this.logistica );
    this.event.title = this.logistica.TIPO === 'I' ? 'Ingreso' : 'Salida' ;
    this.event.location = this.logistica.OBSERVACION_CLIENTE;
    this.event.startDate = this.logistica.FECHA_LOG;
    this.event.endDate = this.logistica.FECHA_LOG;

    this.calendar.createEvent(this.event.title, this.event.location,
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
    );
  }

}
