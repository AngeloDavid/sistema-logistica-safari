import { Component, OnInit } from '@angular/core';
import { User, Optioninput } from '../../interfaces/index';
import { ModalController, AlertController, Events } from '@ionic/angular';
import {MpChangePwdPage} from '../mp-change-pwd/mp-change-pwd.page';
import { Storage } from '@ionic/storage';
import {UserService} from '../api/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User = {
    CODIGO_CLIE: '',
    CODIGO_NOMINA: '',
    APELLIDOS: '',
    NOMBRES: '',
    AREA_TRABAJO: '',
    BARRIO: '',
    CALLE_PRINCIPAL: '',
    NUM_CASA: '',
    CALLE_SECUNDARIA: '',
    REFERENCIA: '',
    FONO_CELULAR: '',
    RUTA: '',
    USUARIO_APP: '',
    PASSWD_APP: '',
    EMAIL: '',
    CAMBIAR_PASSWD: '',
    EMPRESA: ''
  };

  listop: Optioninput [] = [ ];
  constructor( public modalController: ModalController,
               public alertCtrl: AlertController,
               private userSer: UserService,
              public events: Events, private storage: Storage) {
                this.storage.get('userlogin').then( (val: any) => {
                  // this.userSer.loginUser(val.USUARIO_APP )
                  console.log(val);
                  this.user = val;
                  this.listop = [
                    {
                      id: 1,
                      tipo: 'input',
                      type: 'text',
                      descp: 'Nombres',
                      value: this.user.NOMBRES,
                      icon: 'person',
                      model: 'NOMBRES',
                      isdisabled: true,
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
                      isdisabled: true,
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
                      isdisabled: true,
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
                      isdisabled: true,
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
                      isdisabled: true,
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
                      isdisabled: true,
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
                      isdisabled: true,
                      optional: true
                    }
                  ];
                });
   }

  ngOnInit() {
    console.log('Hola perfil');
  }

  MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  NombreUnido(apellido: string, nombre: string) {
    return this.MaysPrimera(nombre.split(' ' , 1 )[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split( ' ', 1)[0].toLowerCase());
  }
  editar() {
    this.presentAlertConfirm();
  }
  guardardatos(action: string) {
    if ( action === 'send') {
      // CAMBIAR DATOS VARIABLES
      this.listop.forEach(opt => {
        this.user[opt.model] = opt.value;
      });
      // CAMBIAR DATOS VARIABLES GLOBAL
      this.userSer.updateUser(this.user).subscribe((data) => {
        this.storage.set('userlogin', this.user);
        this.events.publish('userlogin', this.user);
      },
      (err) => {
        console.log(err);
      });
    } else {
      this.listop.forEach(opt => {
        opt.value = this.user[opt.model];
      });
    }
    console.log(this.user);
  }
  async CambiarPwd() {
    const modal = await this.modalController.create({
      component: MpChangePwdPage,
      componentProps: { value: this.user.CODIGO_NOMINA, origin : 'profile' }
    });
    return await modal.present();
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      subHeader: '¿Desea Actualizar sus datos?',
      /*message: '¿Desea Actualizar sus datos?',*/
      mode: 'ios',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.guardardatos('recive');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.guardardatos('send');
          }
        }
      ]
    });

    await alert.present();
  }
}
