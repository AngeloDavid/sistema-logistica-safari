import { Global } from './params';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User} from '../../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url de api rest
  url: String = this.global.urlApi + 'Usuariosdv/';
  cabecera;
  constructor(public http: HttpClient, private global: Global ) {
    this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }

  // Metodo que se conecta con el servidor para ver si existe el usuario
  loginUser(user: string, password: string) {
    console.log('Service');
    return this.http.get(this.url + 'get?id=\'' + user + '\'&id1=\'' + password + '\'');
  }

  // cambiar datos
  updateUser(user: User) {
    const urluser = this.url + 'updatedt?id=\'' + user.FONO_CELULAR + '\'&id1=\'' + user.FONO_CASA
    + '\'&id2=\'' + user.EMAIL + '\'&id3=\'' + user.USUARIO_APP + '\'' ;
    console.log(urluser);
    return this.http.put(urluser, user, {headers: this.cabecera});
  }

  // cambiar contraseña
  changePWD (pwdBefore: string, pwdNow: string, userCode: string) {
    const datos = {};
    const urlpwd = this.url + 'updateps?id=\'' + pwdNow + '\'&id1=\'' + userCode
    + '\'&id2=\'' + pwdBefore + '\'';
    console.log(urlpwd);
    return this.http.put( urlpwd , datos, {headers: this.cabecera});
  }


}
