import { LoginPage } from './../login/login.page';
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate, CanDeactivate <LoginPage> {
    enablelogin: boolean;
    constructor(private storage: Storage) {
        this.enablelogin = true;
    }
    canActivate(): boolean {
        this.storage.get('userlogin').then((val) => {
            if (val) {
                this.enablelogin = true;
            } else {
                this.enablelogin = false;
            }
        });
        console.log(this.enablelogin);
        return this.enablelogin;
    }
    setEnablelogin( _value ) {
        this.enablelogin = _value;
    }
    canDeactivate(): boolean {
        this.storage.get('userlogin').then((val) => {
            if (val) {
                this.enablelogin = true;
            } else {
                this.enablelogin = false;
            }
        });
        console.log(!this.enablelogin);
        return this.enablelogin;
    }
}
