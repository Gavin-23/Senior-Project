import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

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
  member: string[];
  userId: string;
  // status= false;

  constructor(
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    private alertController: AlertController,
    private router: Router) {
  }
  


  ngOnInit() {
    // this.user.read_Event().subscribe(data => {

    //   this.event = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       Name: e.payload.doc.data()['Name'],
    //       Desc: e.payload.doc.data()['Description'],
    //       Localtion: e.payload.doc.data()['Location'],
    //       Time: e.payload.doc.data()['Time'],
    //       Scope: e.payload.doc.data()['Scope'],
    //       Type: e.payload.doc.data()['Type'],
    //     };
      
    //   })
    //   console.log(this.user);

    // });
  }

  CreateRecord() {
    if (this.name == "") {
      this.showAlert("Name empty!", "Please continue enter with the missing information!");
      console.log("Name empty!");
      console.log("show name empty alert")

    } else if (this.desc == "") {
      this.showAlert("Description empty!", "Please continue enter with the missing information!");
      console.log("Description empty!");
      console.log("show description empty alert")

    } else if (this.localtion == "") {
      this.showAlert("Location empty!", "Please continue enter with the missing information!");
      console.log("Location empty!");
      console.log("show location empty alert")


    } else if (this.time == "") {
      this.showAlert("Time empty!", "Please continue enter with the missing information!");
      console.log("Time empty!");
      console.log("show time empty alert")

    } else if (this.scope == "") {
      this.showAlert("Scope empty!", "Please continue enter with the missing information!");
      console.log("Scope empty!");
      console.log("show scope empty alert")

    } else if (this.type == "") {
      this.showAlert("Type empty!", "Please continue enter with the missing information!");
      console.log("Type empty!");
      console.log("show type empty alert")

    } else {
      this.userId = firebase.auth().currentUser.uid
      let record = {};
      record['Name'] = this.name;
      record['Description'] = this.desc;
      record['Location'] = this.localtion;
      record['Time'] = this.time;
      record['Scope'] = this.scope;
      record['Type'] = this.type;
      record['UID'] = this.userId;
      // record['Status'] = this.status;
      record['Member'] = [];

      this.user.create_NewEvent(record).then(resp => {
        this.name = "";
        this.desc = "";
        this.localtion = "";
        this.time = "";
        this.scope = "";
        this.type = "";
        this.userId = "";
        // this.status = false;
        this.member = [];
        this.showAlert("Successfully", "Create Success!");
        this.router.navigateByUrl('tabs/event-list');
        console.log("Create Successfully!")
        console.log("show create successfully alert")
      })
        .catch(error => {
          console.log(error);
        });
    }
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present()
  }


  defaultSelectedRadio = "Public";
  //Get value on ionChange on IonRadioGroup
  //selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  //selectedRadioItem:any;

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

  // radioGroupChange(event) {
  //   console.log("radioGroupChange",event.detail);
  //   this.selectedRadioGroup = event.detail;
  // }

  // radioFocus() {
  //   console.log("radioFocus");
  // }
  // radioSelect(event) {
  //   console.log("radioSelect",event.detail);
  //   this.selectedRadioItem = event.detail;
  // }
  // radioBlur() {
  //   console.log("radioBlur");
  // }


}
