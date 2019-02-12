import { Component } from '@angular/core';
import { User, Logistic } from '../interfaces/index';
import { Platform, Events, AlertController } from '@ionic/angular';
// import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthGuard } from './api/authGuard.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/members/home',
      icon: 'home'
    },
    {
      title: 'Recorridos',
      url: '/members/list',
      icon: 'bus'
    },
    {
      title: 'Perfil',
      url: '/members/profile',
      icon: 'contact'
    },
    // {
    //   title: 'Cerrar Sesión',
    //   url: 'cerrar()',
    //   action: 'cerrar()',
    //   icon: 'log-out'
    // }
  ];
  // user: User;
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
  uservacio: User = {
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
  listLogt: Logistic [] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private storage: Storage,
    public alertCtrl: AlertController,
    public authguard: AuthGuard
  ) {
    this.initializeApp();
    this.events.subscribe('userlogin', (user) => {
      this.user = user;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.router.navigateByUrl('/login');
      this.storage.get('userlogin').then((val) => {
        // console.log(val, 'valor' );
        if (val) {
          this.user = val;
          this.router.navigateByUrl('/members/home');
          this.splashScreen.hide();
        } else {
          this.router.navigateByUrl('/');
          this.splashScreen.hide();
        }
      });
    });
  }
  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  NombreUnido(apellido: string, nombre: string) {
    return this.MaysPrimera(nombre.split(' ' , 1 )[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split( ' ', 1)[0].toLowerCase());
  }

  async cerrar() {
      const alert = await this.alertCtrl.create({
        subHeader: 'Cerrar Sesión',
        message: '¿Esta Seguro de Cerrar sesión?',
        mode: 'ios',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('CS/ Confirm Cancel: blah');
            }
          }, {
            text: 'Si',
            handler: () => {
              console.log('CS/ Confirm Okay');
              this.storage.remove('userlogin');
              this.storage.remove('listlog');
              this.events.publish('userlogin', this.uservacio);
              this.authguard.setEnablelogin(false);
              this.router.navigateByUrl('/');
            }
          }
        ]
      });
      await alert.present();
  }
}
