import { Component, OnInit } from '@angular/core';
import { User, Optioninput } from '../../interfaces/index';
import { ModalController } from '@ionic/angular';
import {MpChangePwdPage} from '../mp-change-pwd/mp-change-pwd.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User = {
    CODIGO_CLIE: '0010001',
    CODIGO_NOMINA: '0010001',
    APELLIDOS: 'LOPEZ VALLE',
    NOMBRES: 'KATHERINE ALEXANDRA',
    AREA_TRABAJO: 'SAC',
    BARRIO: 'KENEDY',
    CALLE_PRINCIPAL: 'DE  LOS JAZMINES',
    NUM_CASA: 'N52-418',
    CALLE_SECUNDARIA: 'CAPITAN RAMON BORJA Y LOS PINOS ',
    REFERENCIA: 'ESQUINERO  SOBRE  LOS  JAZMINES  ANTES DE  LLEGAR AL CONJUNTO BRASILIA 1',
    FONO_CELULAR: '0983346578',
    RUTA: '0010003',
    USUARIO_APP: '0502336548',
    PASSWD_APP: '0502336548',
    EMAIL: 'fabianjacho@gmail.com',
    CAMBIAR_PASSWD: 'S',
  };

  listop: Optioninput [] = [
    {
      id: 1,
      tipo: 'input',
      type: 'text',
      descp: 'Nombres',
      value: this.user.NOMBRES,
      icon: 'person',
      model: 'NOMBRES',
      isdisabled: false,
      optional: false
    },
    {
      id: 1,
      tipo: 'input',
      type: 'text',
      descp: 'Apellidos',
      value: this.user.APELLIDOS,
      icon: '',
      model: 'APELLIDOS',
      isdisabled: false,
      optional: false
    },
    {
      id: 1,
      tipo: 'input',
      type: 'tel',
      descp: 'Celular',
      value: this.user.FONO_CELULAR,
      icon: 'phone-portrait',
      model: 'FONO_CELULAR',
      isdisabled: false,
      optional: false
    },
    {
      id: 2,
      tipo: 'input',
      type: 'tel',
      descp: 'Telefono Casa',
      value: this.user.FONO_CASA,
      icon: 'call',
      model: 'FONO_CASA',
      isdisabled: false,
      optional: true
    },
    {
      id: 3,
      tipo: 'input',
      type: 'email',
      descp: 'E-mail',
      value: this.user.EMAIL,
      icon: 'mail',
      model: 'EMAIL',
      isdisabled: false,
      optional: false
    },
    {
      id: 4,
      tipo: 'input',
      type: 'text',
      descp: 'Barrio',
      value: this.user.BARRIO,
      icon: 'business',
      model: 'BARRIO',
      isdisabled: false,
      optional: false
    },
    {
      id: 5,
      tipo: 'input',
      type: 'text',
      descp: 'Calle Principal',
      value: this.user.CALLE_PRINCIPAL,
      icon: 'home',
      model: 'CALLE_PRINCIPAL',
      isdisabled: false,
      optional: false
    },
    {
      id: 6,
      tipo: 'input',
      type: 'text',
      descp: 'Número Casa',
      value: this.user.NUM_CASA,
      icon: '',
      model: 'NUM_CASA',
      isdisabled: false,
      optional: true
    },
    {
      id: 7,
      tipo: 'input',
      type: 'text',
      descp: 'Calle Secundaria',
      value: this.user.CALLE_SECUNDARIA,
      icon: '',
      model: 'CALLE_SECUNDARIA',
      isdisabled: false,
      optional: true
    },
    {
      id: 8,
      tipo: 'input',
      type: 'text',
      descp: 'Referencia',
      value: this.user.REFERENCIA,
      icon: '',
      model: 'REFERENCIA',
      isdisabled: false,
      optional: true
    },
  ];
  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }

  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  NombreUnido(apellido: string, nombre: string) {
    return this.MaysPrimera(nombre.split(' ' , 1 )[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split( ' ', 1)[0].toLowerCase());
  }
  editar() {
    this.guardardatos();
  }
  guardardatos() {
    this.listop.forEach(opt => {
      this.user[opt.model] = opt.value;
    });
    console.log(this.user);
  }
  async CambiarPwd() {
    const modal = await this.modalController.create({
      component: MpChangePwdPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
