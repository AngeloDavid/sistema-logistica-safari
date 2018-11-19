import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.page.html',
  styleUrls: ['./addroute.page.scss'],
})
export class AddroutePage implements OnInit {

  event = { title: '', location: '', message: '', startDate: '', endDate: '' };
  datenow = new Date();

  constructor(private router: Router, public alertCtrl: AlertController, private calendar: Calendar) {

   }

  ngOnInit() {
  }

  gotoaddRoute() {
    this.router.navigate(['/list']);
  }

  async save() {
    this.calendar.createEvent(this.event.title, this.event.location,
      this.event.message, new Date(this.event.startDate), new Date(this.event.endDate))
      .then(
      (msg) => {
        const alert =  this.alertCtrl.create({
          header: 'Success!',
          subHeader: 'Event saved successfully',
          buttons: ['OK']
        });
      },
      (err) => {
        const alert = this.alertCtrl.create({
          header: 'Failed!',
          subHeader: err,
          buttons: ['OK']
        });
      }
    );
  }

}
