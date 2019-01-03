import { Component } from '@angular/core';
import { User, Logistic } from '../interfaces/index';
import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
      url: '/login',
      icon: 'log-out'
    }
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
  };

  listLogt: Logistic [] = [];

  constructor(
    private router: Router,
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
    this.router.navigateByUrl('/login');
    this.storage.get('userlogin').then((val) => {
      console.log(val, 'valor' );
      if (val) {
        this.user = val;
        this.router.navigateByUrl('/home');
        console.log(val);
      } else {
        this.router.navigateByUrl('/login');
      }
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    });
  }
  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  NombreUnido(apellido: string, nombre: string) {
    return this.MaysPrimera(nombre.split(' ' , 1 )[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split( ' ', 1)[0].toLowerCase());
  }
}
