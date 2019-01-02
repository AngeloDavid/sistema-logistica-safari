import { Component, OnInit } from '@angular/core';
import {UserService} from '../api/user.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  idUser: any;
  pwdUser: any;
  constructor( private userSer: UserService) { }

  ngOnInit() {
  }

  login() {
    console.log('loginuser');
    this.userSer.loginUser(this.idUser, this.pwdUser);

  }

}
