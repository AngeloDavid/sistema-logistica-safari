import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams, AlertController } from '@ionic/angular';
import {UserService} from '../api/user.service';
@Component({
  selector: 'app-mp-change-pwd',
  templateUrl: './mp-change-pwd.page.html',
  styleUrls: ['./mp-change-pwd.page.scss'],
})
export class MpChangePwdPage implements OnInit {
  userid = '';
  datos: any = {
    pwdBefore: '',
    pwdNow: '',
    pwdconf: '',
  };
  constructor(public mctrl: ModalController, navParams: NavParams, public alertCtrl: AlertController,
    private userSer: UserService) {
    this.userid = navParams.data.value;
  }

  ngOnInit() {

  }
  dismiss() {
    this.mctrl.dismiss();
  }
  changepwd() {
    if ( this.datos.pwdNow === this.datos.pwdconf) {
      this.userSer.changePWD(this.datos.pwdBefore, this.datos.pwdNow , this.userid).subscribe((data) => {
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
