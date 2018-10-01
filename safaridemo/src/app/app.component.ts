import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { SettingsPage } from '../pages/settings/settings';
import { CompanyPage } from '../pages/company/company';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;
  user:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage,icon:'home' },
      { title: 'Recoridos', component: CompanyPage, icon:'train' },
      { title: 'Mapa', component: MapPage, icon:'map' },
      { title: 'Configuraciones', component: SettingsPage, icon:'settings' },
      { title: 'Cerrar  Sesión', component: null, icon:'exit' }
    ];

    this.user={
      name:"VICTOR GONZALO",
      lastname:"GUALOTO SANGUÑA",
      code:"C6",
      
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component != null){
      this.nav.setRoot(page.component);
    }
  
  }
}
