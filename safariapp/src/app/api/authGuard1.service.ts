import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard1  implements CanActivate {
    enablelogin: boolean;
    constructor(private storage: Storage, private alertCtrl: AlertController ) {
        this.enablelogin = true;
    }
    canActivate(): boolean {
        this.storage.get('userlogin').then((val) => {
            if (val) {
                this.enablelogin = false;
            } else {
                this.enablelogin = true;
            }
        });
      // this.msgmostrar(this.enablelogin + '' , 'ms');
        /// console.log(this.enablelogin);
        return this.enablelogin;
    }
    setEnablelogin( _value ) {
        this.enablelogin = _value;
    }

    async  msgmostrar( msg: string , title: string) {
        const alert = await this.alertCtrl.create({
            header: title,
            message: msg,
            buttons: ['OK']
        });
        await alert.present();
      }
}
