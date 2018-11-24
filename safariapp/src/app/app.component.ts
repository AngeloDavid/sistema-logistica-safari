import { Component } from '@angular/core';
import { User, Logistic } from '../interfaces/index';
import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Recorridos',
      url: '/list',
      icon: 'bus'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Cerrar Sesión',
      url: '/mpChangePwd',
      icon: 'log-out'
    }
  ];

  user: User = {
    CODIGO_CLIE: '0010001',
    CODIGO_NOMINA: '0010001',
    APELLIDOS: 'LOPEZ VALLE',
    NOMBRES: 'KATHERINE ALEXANDRA',
    AREA_TRABAJO: 'SAC',
    BARRIO: 'KENEDY',
    CALLE_PRINCIPAL: 'DE  LOS JAZMINES',
    NUM_CASA: 'N52-418',
    CALLE_SECUNDARIA: 'CAPITAN RAMON BORJA Y LOS PINOS ',
    REFERENCIA: 'ESQUINERO  SOBRE  LOS  JAZMINES  ANTES DE  LLEGAR AL CONJUNTO BRASILIA 1',
    FONO_CELULAR: '0983346578',
    RUTA: '0010003',
    USUARIO_APP: '0502336548',
    PASSWD_APP: '0502336548',
    EMAIL: 'fabianjacho@gmail.com',
    CAMBIAR_PASSWD: 'S',
  };

  listLogt: Logistic [] = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private storage: Storage
  ) {
    this.initializeApp();
    this.events.subscribe('userlogin', (user) => {
      this.user = user;
    });
  }

  initializeApp() {
  this.storage.set('userlogin', this.user);
  // this.storage.set('listlog', this.listLogt);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  NombreUnido(apellido: string, nombre: string) {
    return this.MaysPrimera(nombre.split(' ' , 1 )[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split( ' ', 1)[0].toLowerCase());
  }
}
