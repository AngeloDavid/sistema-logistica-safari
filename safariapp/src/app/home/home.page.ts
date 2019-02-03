import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from '../../interfaces/index';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dtoday: any = new Date();
  more: Boolean = true;
  myLatLng = {
    lat: 0,
    lng: 0
  };
  map: any;
  user: User = {
    CODIGO_CLIE: '',
    CODIGO_NOMINA: '',
    APELLIDOS: '',
    NOMBRES: '',
    AREA_TRABAJO: '',
    BARRIO: '',
    CALLE_PRINCIPAL: '',
    NUM_CASA: '',
    CALLE_SECUNDARIA: '',
    REFERENCIA: '',
    FONO_CELULAR: '',
    RUTA: '',
    USUARIO_APP: '',
    PASSWD_APP: '',
    EMAIL: '',
    CAMBIAR_PASSWD: '',
    EMPRESA: ''
  };
  constructor(
    //  private geolocation: Geolocation,
    private loadinCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private router: Router,
    private menu: MenuController,
    private platform: Platform
     ) {
  }

  morechange() {
    this.more = !this.more;
  }

  ngOnInit() {
    this.storage.get('userlogin').then((val) => {
    //   console.log(val, 'valor' );
      if (val) {
        this.user = val;
      } else {
        this.router.navigate(['login', {skipLocationChange: true, replaceUrl: true}]);

      }
    });
    // this.loadMap();
  }
  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }
  /*async loadMap () {
    // const loading = await this.loadinCtrl.create({
    //   message: `Cargando ...`,
    //   spinner: 'bubbles'
    // });
    // loading.present();
    await this.getposition().catch(() => {
      // loading.dismiss();
      this.alerta();
    } );

    const mapEle: HTMLElement = document.getElementById('map');

    // Create a map
    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 16
    });
    google.maps.event
    .addListenerOnce(this.map, 'idle', () => {
      // loading.dismiss();
      this.addMark(this.myLatLng.lat, this.myLatLng.lng);
    });
  }
*/
  /*private async getposition() {
    const rta = await this.geolocation.getCurrentPosition();
    this.myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(this.myLatLng);
  } */

  private addMark(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: {lat, lng},
      zoom: 8,
      map: this.map,
      title: 'Hello World!'
    });
  }
  private async alerta () {
    const alert = await this.alertCtrl.create({
      header: 'Error ',
      subHeader: 'No se puede localizar su ubicacion',
      message: 'Habilite su GPS',
      buttons: ['OK']
    });

    await alert.present();
  }
  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  NombreUnido(apellido: string, nombre: string) {
    return this.MaysPrimera(nombre.split(' ' , 1 )[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split( ' ', 1)[0].toLowerCase());
  }
}
