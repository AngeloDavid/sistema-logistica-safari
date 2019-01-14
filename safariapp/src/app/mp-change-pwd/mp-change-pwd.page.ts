import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams, AlertController } from '@ionic/angular';
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
  pwdBefore: AbstractControl;
  pwdNow: AbstractControl;
  pwdconf: AbstractControl;
  constructor(public mctrl: ModalController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private fb: FormBuilder,
    private userSer: UserService) {
      this.userid = navParams.data.value;
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
  changepwd() {
    if ( this.pwdNow.value === this.pwdconf.value) {
      this.userSer.changePWD(this.pwdBefore.value, this.pwdNow.value , this.userid).subscribe((data) => {
        console.log(data);
        this.mctrl.dismiss();
      }, (err) => {
        console.log(err);
      });
    } else {
      this.msgmostrar('ERROR', 'La nueva contraseña no coincide');
    }

  }
  async  msgmostrar(title, msg) {
    const alert = await this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: ['OK']
    });
    await alert.present();
  }
}
