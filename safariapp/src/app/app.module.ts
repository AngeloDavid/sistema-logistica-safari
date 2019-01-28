import {MpChangePwdPage } from './mp-change-pwd/mp-change-pwd.page';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// service http de angular
import { HttpClientModule } from '@angular/common/http';
import { Global } from './api/params';
import { UserService } from './api/user.service';

@NgModule({
  declarations: [AppComponent, MpChangePwdPage],
  entryComponents: [ MpChangePwdPage],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(  {
      scrollPadding: 'false',
      scrollAssist: true,
     }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    Global,
    StatusBar,
    SplashScreen,
    UserService,
    CallNumber,
    // Platform,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
