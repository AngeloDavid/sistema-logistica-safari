import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {EmployeoverPage} from '../employeover/employeover';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  option:string='list';
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  personal: Array<{id:number,
                  area?:string,
                  name:string,
                  lastname:string,             
                  route:string,
                  neighborhod:string,
                  streetm:string,
                  numhouse?:string,
                  streets:string,
                  obs?:string,
                  phoneh?:string,
                  phonec:string,
                  timeC?:Date,
                  isarrive:boolean,
                }>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popctrl:PopoverController
    ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.personal=[
    {
      id:1,
      name:'CARLOS IVAN',
      lastname:'AGILA ROMERO',
      neighborhod:'ATUCUCHO',
      route:'Norte',
      streetm:'SECTOR SAN JACINTO Y',
      streets:'JULIO JARAMILLO',
      phonec:'0985940195',
      timeC: new Date(2018, 10, 9, 23, 15),
      isarrive:false,
    },
    {
      id:2,
      name:'JHONNY PATRICIO',
      lastname:'BALSECA YACELGA ',
      neighborhod:'MARIANITAS',
      route:'NORTE',
      streetm:'GEOVANNY CALLES',
      streets:'PROGRESO',
      obs:'CONJUNTO MONTECARLO "4"',
      phoneh:'2037295',
      phonec:'0985940195',
      timeC: new Date(2018, 10, 9, 22, 10),
      isarrive:false,
    },
    {
      id:3,
      name:'ANDERSON',
      lastname:'GARCIA',
      neighborhod:'CALDERON',
      route:'NORTE',
      streetm:'ATAHUALPA',
      numhouse:'CASA 56',
      streets:'CONJ. LOS CAPULIES',
      phonec:'995540815',
      timeC: new Date(2018, 10, 9, 22, 5),
      isarrive:true,
    },
    {
      id:4,
      name:'GEOMAR NAZARETH',
      lastname:'LOAIZA CASTILLO',
      neighborhod:'PUSUQUI',
      route:'NORTE',
      streetm:'PUERTA DEL SOL',
      streets:'PARAISO',
      phonec:'990475553',
      timeC: new Date(2018, 10, 9, 22, 30),
      isarrive:false,
    },
    {
      id:5,
      name:'KENY ALEXANDER',
      lastname:'MALDONADO VASQUEZ',
      neighborhod:'LA PLANADA ',
      route:'NORTE',
      streetm:'AV. PRIMERA MZ12',
      numhouse:'LOTE 199',
      streets:'CALLE "L"',
      obs:'BARRIO RANCHO ALTO',
      phoneh:'3388161',
      phonec:'0991620736',
      timeC: new Date(2018, 10, 9, 23, 50),
      isarrive:true,
    }
    ];
  }

 detallar(i){
  const popover = this.popctrl.create(EmployeoverPage,{item:this.personal[i]},{});
  popover.present();
 }
 personalchecked(i){
  this.personal[i].isarrive=!this.personal[i].isarrive;
 }
 doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}
}
