import { LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
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

  constructor( private geolocation: Geolocation,
    private loadinCtrl: LoadingController,
    private alertCtrl: AlertController
     ) {
  }

  morechange() {
    this.more = !this.more;
  }

  ngOnInit() {
    this.loadMap();
  }
  async loadMap () {
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

  private async getposition() {
    const rta = await this.geolocation.getCurrentPosition();
    this.myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(this.myLatLng);
  }

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
}
