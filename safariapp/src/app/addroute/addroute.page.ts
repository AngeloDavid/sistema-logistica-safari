import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertController, Events, LoadingController} from '@ionic/angular';
import {Logistic} from '../../interfaces/index';
import { Storage } from '@ionic/storage';
import { RouteService } from '../api/route.service';
import * as moment from 'moment';
@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddroutePage implements OnInit {

  event = { title: '', location: '', message: '', startDate: '', endDate: '' };
  datenow = new Date();
  dateend = new Date();
  dateendst: any;
  now = moment();
  isnew = true;
  logistica: Logistic = {
    CODIGO_LOG: '',
    CODIGO_CLIE: '',
    CODIGO_NOMINA: '',
    TIPO: 'I',
    FECHA_LOG: this.datenow.toISOString(),
    TURNO_LOG: this.datenow.toISOString(),
    OBSERVACION_CLIENTE: ''
  };
  Listlg: Logistic [];
  indexlg: number;
  isrepeat: boolean;
  constructor(private router: Router,
    private routeParms: ActivatedRoute,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public routerserv: RouteService,
    // private calendar: Calendar,
    private storage: Storage) {
      this.storage.get('userlogin').then((val) => {
        this.logistica.CODIGO_CLIE = val.CODIGO_CLIE;
        this.logistica.CODIGO_NOMINA = val.CODIGO_NOMINA;
        this.logistica.FECHA_LOG  = moment(this.now.format(), moment.ISO_8601).format();
        this.logistica.TURNO_LOG  = moment(this.now.format(), moment.ISO_8601).format();
      });
      this.isrepeat = false;
      this.dateend.setDate(this.datenow.getDate() + 1 );
      this.dateendst = this.dateend.toISOString ();
   }

  ngOnInit() {
    this.storage.get('listlog').then( (val) => {
      this.Listlg = val != null ? val : new Array();
     /// console.log (this.Listlg );
      this.routeParms.params.subscribe(( data: any) => {
        // console.log(data);
        if (data.action === 'edit') {
          this.isnew = false;
          this.Listlg.forEach(element => {
            if (element.CODIGO_LOG == data.CODIGO_LOG) {
              this.logistica = element;
            }
          });
        } else {
          this.isnew = true;
        }
      });
    });
  }
  gotoaddRoute() {
    this.router.navigate(['/list']);
  }

  async save() {
    const alert = await this.loadCtrl.create({
      message: `Enviando ...`,
      spinner: 'bubbles'
    });

    await alert.present();
    // this.logistica.CODIGO_LOG = '000' + (this.indexlg + 1);
    const fecha1 = new Date(this.logistica.TURNO_LOG);
    const fecha2 = new Date(this.logistica.FECHA_LOG);
    fecha2.setHours(fecha1.getHours(), fecha1.getMinutes(), 0 , 0);
    this.logistica.FECHA_LOG  = moment(fecha2, moment.ISO_8601).format();
    if ( this.isnew ) {
      // repetir programacion -- arreglar fecha
      if ( false) {
        const fecha3 = new Date(this.dateendst);
        console.log(fecha3);
        const dif = fecha3.getDate() - fecha2.getDate();
        console.log('Datos' , dif, fecha3.getDate() , fecha2.getDate());
        if (dif > 0) {
          const log: Logistic = {
            CODIGO_LOG : this.logistica.CODIGO_LOG,
            CODIGO_CLIE : this.logistica.CODIGO_CLIE,
            OBSERVACION_CLIENTE : this.logistica.OBSERVACION_CLIENTE,
            TIPO : this.logistica.TIPO,
            FECHA_LOG :  moment(fecha2, moment.ISO_8601).format(),
            TURNO_LOG : moment(fecha2, moment.ISO_8601).format(),
            CODIGO_NOMINA : this.logistica.CODIGO_NOMINA
          };
          for (let index = 0 ; index <= dif; index++) {
            // this.Listlg.push(log);
            // console.log(this.Listlg, index, log);
            console.log(log);
            log.FECHA_LOG = moment(fecha2, moment.ISO_8601).format();
            log.TURNO_LOG = moment(fecha2, moment.ISO_8601).format();
            log.CODIGO_LOG = '000' + ( this.indexlg + index + 1 ) ;
            fecha2.setDate(fecha2.getDate() + 1);
          }
        }
      } else {
        this.routerserv.addLogist(this.logistica).subscribe((data: any) => {
          console.log(data);
          if (data.CODE === 200) {
            this.logistica.CODIGO_LOG = data.NUM_RECORRIDO;
            console.log('index log', this.logistica );
            this.Listlg.push(this.logistica);
            this.storage.set('listlog', this.Listlg);
            this.presentAlert('FELICIDADES', data.MSG);
          } else {
            this.presentAlert('ERROR', data.MSG);
          }
        } );
      }
    } else {
      this.Listlg.forEach(elet => {
        if (elet.CODIGO_LOG == this.logistica.CODIGO_LOG) {
          console.log('edut', this.logistica);
          elet = this.logistica;
        }
      });
    }
    console.log(this.Listlg, 'lista');
    alert.dismiss();
    this.router.navigate(['/list']);
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
