import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard1  implements CanActivate {
    enablelogin: boolean;
    constructor(private storage: Storage) {
        this.enablelogin = true;
    }
    canActivate(): boolean {
        return this.enablelogin;
    }
    setEnablelogin( _value ) {
        this.enablelogin = _value;
    }
}
