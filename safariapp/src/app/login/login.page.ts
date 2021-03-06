import { Component, OnInit } from '@angular/core';
import {UserService} from '../api/user.service';
import {User} from '../../interfaces/user';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {AuthGuard1 } from '../api/authGuard1.service';
import {AuthGuard } from '../api/authGuard.service';
import {AlertController, LoadingController, Events, ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {MpChangePwdPage} from '../mp-change-pwd/mp-change-pwd.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  loginForm: FormGroup;
  idUser: AbstractControl;
  pwdUser: AbstractControl;
  constructor( private userSer: UserService, public events: Events, public modalController: ModalController,
    private storage: Storage, private router: Router, private alertCtrl: AlertController, private fb: FormBuilder,
    public loadCtrl: LoadingController,
    public authguard1: AuthGuard1,
    public authguard: AuthGuard) {
      this.loginForm = fb.group({
        'idUser' : ['', Validators.compose([Validators.required])],
        'pwdUser' : ['', Validators.compose([Validators.required])],
      });
      this.idUser = this.loginForm.controls['idUser'];
      this.pwdUser = this.loginForm.controls['pwdUser'];
     }
  ngOnInit() {
  }
  async login() {
    const cargando = await this.loadCtrl.create({
      message: `Ingresando ...`,
      spinner: 'bubbles'
    });
    await cargando.present();
    console.log('loginuser', this.idUser);
    this.userSer.loginUser(this.idUser.value, this.pwdUser.value).subscribe(
      (res: any) => {
        if ( res.CODE === 400) {
          cargando.dismiss();
          this.msgmostrar(res.MSG, 'Error de ingreso');
        } else {
          this.user = res.value[0];
          this.user.USUARIO_APP = this.idUser.value;
          this.storage.set('userlogin', this.user);
          this.events.publish('userlogin', this.user);
          if ( this.user.CAMBIAR_PASSWD === '0' ) {
            this.CambiarPwd();
          }
          cargando.dismiss();
          this.authguard1.setEnablelogin(false);
          this.authguard.setEnablelogin(true);
          this.router.navigateByUrl('/members/home');
          this.loginForm.reset();
        }
      },
      err => {
        cargando.dismiss();
        this.msgmostrar('Intente de nuevo por favor', 'Error de conexion');
      });
  }
  async  msgmostrar( msg: string , title: string) {
    const alert = await this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: ['OK']
    });
    await alert.present();
  }

  async CambiarPwd() {
    const modal = await this.modalController.create({
      component: MpChangePwdPage,
      componentProps: { value: this.user.CODIGO_NOMINA, origin : 'login' }
    });
    return await modal.present();
  }

}
