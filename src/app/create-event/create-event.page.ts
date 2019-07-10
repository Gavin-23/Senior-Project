import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {

  event: any;
  name: string;
  desc: string;
  localtion: string;

  constructor(
		public http: Http,
		public afstore: AngularFirestore,
		public user: UserService,
		private alertController: AlertController,
		private router: Router) { }


    ngOnInit() {
      this.user.read_Event().subscribe(data => {
   
        this.event = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
            Desc: e.payload.doc.data()['Description'],
            Localtion: e.payload.doc.data()['Location'],
          };
        })
        console.log(this.user);
   
      });
    }

    CreateRecord() {
      let record = {};
      record['Name'] = this.name;
      record['Description'] = this.desc;
      record['Location'] = this.localtion;
      this.user.create_NewEvent(record).then(resp => {
        this.name = "";
        this.desc = "";
        this.localtion = "";
        console.log(resp);
      })
        .catch(error => {
          console.log(error);
        });
    }


  defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
 
  radio_list = [
    {
      id: '1',
      name: 'radio_list',
      value: 'radio_1',
      text: 'Public',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: 'radio_2',
      text: 'Private',
      disabled: false,
      checked: true,
      color: 'secondary'
    },
  ];
 
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.selectedRadioGroup = event.detail;
  }
 
  radioFocus() {
    console.log("radioFocus");
  }
  radioSelect(event) {
    console.log("radioSelect",event.detail);
    this.selectedRadioItem = event.detail;
  }
  radioBlur() {
    console.log("radioBlur");
  }


}
