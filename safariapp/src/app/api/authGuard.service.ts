import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
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
        return this.enablelogin;
    }
    setEnablelogin( _value ) {
        this.enablelogin = _value;
    }
}
