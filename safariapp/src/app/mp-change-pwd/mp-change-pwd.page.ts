import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController, LoadingController, Events } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {UserService} from '../api/user.service';
import {CustomValidators} from '../classes/custom-validators';
@Component({
  selector: 'app-mp-change-pwd',
  templateUrl: './mp-change-pwd.page.html',
  styleUrls: ['./mp-change-pwd.page.scss'],
})
export class MpChangePwdPage implements OnInit {
  changePwdForm: FormGroup;
  userid = '';
  origin = '' ;
  pwdBefore: AbstractControl;
  pwdNow: AbstractControl;
  pwdconf: AbstractControl;
  constructor(public mctrl: ModalController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    private fb: FormBuilder,
    private userSer: UserService,
    public events: Events,
    private storage: Storage,
    private router: Router) {
      this.userid = navParams.data.value;
      this.origin = navParams.data.origin;
      this.changePwdForm = fb.group({
        'pwdBefore': ['', Validators.compose([Validators.required])],
        'pwdNow' : ['', Validators.compose ([
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
          Validators.minLength(8)
        ])],
        'pwdconf' : ['', Validators.compose([Validators.required])],
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
    this.pwdBefore = this.changePwdForm.controls['pwdBefore'];
    this.pwdNow = this.changePwdForm.controls['pwdNow'];
    this.pwdconf = this.changePwdForm.controls['pwdconf'];
  }

  ngOnInit() {

  }
  dismiss() {
    this.mctrl.dismiss();
  }
  async changepwd() {
    // loading
    const load = await this.loadCtrl.create({
      message: `Cargando ...`,
      spinner: 'bubbles'
    });
    await load.present();
    if ( this.pwdNow.value === this.pwdconf.value) {
      this.userSer.changePWD(this.pwdBefore.value, this.pwdNow.value , this.userid).subscribe((data: any) => {
        const originb = this.origin === 'profile' ? true : false;
        console.log(data);
        switch ( data.CODE) {
          case 200:
            this.storage.remove('userlogin');
            this.storage.remove('listlog');
            load.dismiss().then( () => {
                this.msgmostrar('!!Operacion exitosa!!', 'El Cambio de contraseña se realizo correctamente', true, originb );
              }
            );
            break;
          default:
          load.dismiss().then( () => {
            this.msgmostrar('ERROR', 'Verifique que la contraseña anterior sea la correcta', false, false );
            }
          );
            break;
        }
      }, (err) => {
        load.dismiss();
        this.msgmostrar('ERROR', 'Problemas de conexion con el servidor', false, false);
      });
    } else {
      load.dismiss();
      this.msgmostrar('ERROR', 'La nueva contraseña no coincide', false, false);
    }

  }
  async  msgmostrar(title, msg, exitnow: boolean, logout: boolean  ) {
    const alert = await this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [
           {
            text: 'Ok',
            handler: () => {
              if (exitnow) {
                this.mctrl.dismiss();
              }
              if (logout) {
                this.router.navigateByUrl('/login');
              }
            }
          }
        ]
    });
    await alert.present();
  }
}
