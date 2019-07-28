import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

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
  time: string;
  scope: string;
  type: string;


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
            Time: e.payload.doc.data()['Time'],
            Scope: e.payload.doc.data()['Scope'],
            Type: e.payload.doc.data()['Type'],
          };
        })
        console.log(this.user);
   
      });
    }

    CreateRecord() {
      if(this.name==""){
        this.showAlert("Please continue enter with the missing information!");
        return console.log ("Name empty!");
      }else if(this.desc==""){
        this.showAlert("Please continue enter with the missing information!");
        return console.log ("Des empty!");
      }else if(this.localtion==""){
        this.showAlert("Please continue enter with the missing information!");
        return console.log ("Location empty!");

      }else if(this.time==""){
        this.showAlert("Please continue enter with the missing information!");
        return console.log ("Time empty!");

      }else if(this.scope==""){
        this.showAlert("Please continue enter with the missing information!");
        return console.log ("Scope empty!");

      }else if(this.type==""){
        this.showAlert("Please continue enter with the missing information!");
        return console.log ("Type empty!");
      }else{
        let record = {};
      record['Name'] = this.name;
      record['Description'] = this.desc;
      record['Location'] = this.localtion;
      record['Time'] = this.time;
      record['Scope'] = this.scope;
      record['Type'] = this.type;
      this.user.create_NewEvent(record).then(resp => {
        this.name = "";
        this.desc = "";
        this.localtion = "";
        this.time = "";
        this.scope = "";
        this.type = "";
        this.showAlert("Create Success!");
        this.router.navigateByUrl('tabs/event-list');
        return console.log ("Successful!")
        console.log(resp);
      })
        .catch(error => {
          console.log(error);
        });
      }
    }

    async showAlert(content: string) {
      const alert = await this.alertController.create({
        message: content,
        buttons: ['OK']
      })
  
      await alert.present()
    }


    defaultSelectedRadio = "Public";
    //Get value on ionChange on IonRadioGroup
    selectedRadioGroup:any;
    //Get value on ionSelect on IonRadio item
    selectedRadioItem:any;
   
    radio_list = [
      {
        id: '1',
        name: 'radio_list',
        value: 'Public',
        text: 'Public',
        disabled: false,
        checked: false,
      }, {
        id: '2',
        name: 'radio_list',
        value: 'Private',
        text: 'Private',
        disabled: false,
        checked: true,
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
