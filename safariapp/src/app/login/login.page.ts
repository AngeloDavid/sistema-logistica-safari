import { Component, OnInit } from '@angular/core';
import {UserService} from '../api/user.service';
import {User} from '../../interfaces/user';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {AlertController, LoadingController, Events} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;

  idUser: any;
  pwdUser: any;
  constructor( private userSer: UserService, public events: Events,
    private storage: Storage, private router: Router, private alertCtrl: AlertController,
    public loadCtrl: LoadingController) { }

  ngOnInit() {
  }

  async login() {
    const cargando = await this.loadCtrl.create({
      message: `Ingresando ...`,
      spinner: 'bubbles'
    });
    await cargando.present();
    console.log('loginuser');
    this.userSer.loginUser(this.idUser, this.pwdUser).subscribe(
      res => {
        this.user = res[0];
        this.user.USUARIO_APP = this.idUser;
        this.storage.set('userlogin', this.user);
        this.events.publish('userlogin', this.user);
        this.router.navigateByUrl('/');
        console.log('¡ Solicitud recibida !');
      },
      err => {
        console.log('¡ Solicitud NO RECIBIDA !', err);
        this.msgmostrar('Intente de nuevo por favor', 'Error de ingreso');
      });
      cargando.dismiss();
  }
  async  msgmostrar(msg, title) {
    const alert = await this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: ['OK']
    });
    await alert.present();
  }

}
