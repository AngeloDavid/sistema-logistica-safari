import { Injectable } from '@angular/core';
import {Logistic } from '../../interfaces/logistic';
import { Global } from './params';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  url: string = this.global.urlApi + 'Recorrido/';
  cabecera;
  now = moment();
  constructor(
    public http: HttpClient,
    private global: Global
  ) {
    this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }

  addLogist(ruta: Logistic ) {
    const parms = this.url + 'ingresarecorrido/?CODIGO_CLIE=' +
    ruta.CODIGO_CLIE + '&CODIGO_NOMINA=' + ruta.CODIGO_NOMINA + '&fecha=' +
    moment(ruta.FECHA_LOG).format('YYYY-MM-DD') + '&hora=' + moment(ruta.FECHA_LOG).format('HH:mm') + '&tipo_viaje=' + ruta.TIPO ;
    console.log(parms);
    return this.http.post(parms, ruta, {headers: this.cabecera});
  }

  // Probar  http://186.4.251.184:1337/Recorrido/consultarecorrido/?fecha_ini=2019-01-10&fecha_fin=2019-01-10
  getalllogistcs( fecha1: any, fecha2: any, CODIGO_NOMINA: any ) {
    const parms = this.url + 'consultarecorrido/?fecha_ini=' + fecha1 + '&fecha_fin=' + fecha2 + '&CODIGO_NOMINA=' + CODIGO_NOMINA;
    console.log(parms);
    return this.http.get(parms, {headers: this.cabecera});
  }

}
