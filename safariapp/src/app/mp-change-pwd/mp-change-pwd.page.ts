import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mp-change-pwd',
  templateUrl: './mp-change-pwd.page.html',
  styleUrls: ['./mp-change-pwd.page.scss'],
})
export class MpChangePwdPage implements OnInit {
  constructor(public mctrl: ModalController) { }

  ngOnInit() {

  }
  dismiss() {
    this.mctrl.dismiss();
  }
}
