import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { } from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  event: any;
  students: any;
  name: string;
  desc: string;
  localtion: string;
  time: string;
  scope: string;
  type: string;
  userId: string;
  studentId: string;
  status = false;

  constructor(
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    private alertController: AlertController,
    private router: Router) {
    this.userId = firebase.auth().currentUser.uid
  }

  ngOnInit() {
    this.user.read_Event().subscribe(data => {
      this.event = data.map(e => {
        if (e.payload.doc.data()['UID'] !== firebase.auth().currentUser.uid) {
          return { isCurrentUser: true }
        } else {
          return {
            isCurrentUser: false,
            id: e.payload.doc.id,
            Name: e.payload.doc.data()['Name'],
            Desc: e.payload.doc.data()['Description'],
            Localtion: e.payload.doc.data()['Location'],
            Time: e.payload.doc.data()['Time'],
            Scope: e.payload.doc.data()['Scope'],
            Type: e.payload.doc.data()['Type'],
            Member: e.payload.doc.data()['Member']
          };
        }
      })
      console.log(this.event);
      console.log("read event successfully!");
    });
  }

  RemoveRecord(rowID) {
    console.log('show confirmation alert');

    this.presentAlertConfirm('Are you sure you want to delete this event?').then(confirm => {

      if (confirm) {
        this.user.delete_Event(rowID);
        this.showAlert("Successfully!", "Delete Success!");
        console.log('show delete success alert');
        console.log('Deleted');
      } else {
        this.router.navigateByUrl('tabs/event-list');
        console.log('Canceled!');
        console.log('show canceled alert');
      }
    })
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditDescription = record.Desc;
    record.EditLocation = record.Localtion;
    record.EditTime = record.Time;
    record.EditScope = record.Scope;
    record.EditType = record.Type;

  }

  UpdateRecord(recordRow) {

    if (recordRow.EditName == "") {
      this.showAlert("Name empty!", "Please continue enter with the missing information!");
      console.log("Name empty!");
      console.log("show name empty alert")

    } else if (recordRow.EditDescription == "") {
      this.showAlert("Description empty!", "Please continue enter with the missing information!");
      console.log("Description empty!");
      console.log("show description empty alert")

    } else if (recordRow.EditLocation == "") {
      this.showAlert("Location empty!", "Please continue enter with the missing information!");
      console.log("Location empty!");
      console.log("show location empty alert")

    } else if (recordRow.EditTime == "") {
      this.showAlert("Time empty!", "Please continue enter with the missing information!");
      console.log("Time empty!");
      console.log("show time empty alert")

    } else if (recordRow.EditScopee == "") {
      this.showAlert("Scope empty!", "Please continue enter with the missing information!");
      console.log("Scope empty!");
      console.log("show scope empty alert")

    } else if (recordRow.EditType == "") {
      this.showAlert("Type empty!", "Please continue enter with the missing information!");
      console.log("Type empty!");
      console.log("show type empty alert")

    } else {
      let record = {};
      record['Name'] = recordRow.EditName;
      record['Description'] = recordRow.EditDescription;
      record['Location'] = recordRow.EditLocation;
      record['Time'] = recordRow.EditTime;
      record['Scope'] = recordRow.EditScope;
      record['Type'] = recordRow.EditType;
      this.user.update_Event(recordRow.id, record);
      recordRow.isEdit = false;
      this.showAlert("Successfully!", "Update Successfully!");
      console.log("Update Successfully!")
      console.log("show create successfully alert")
    }
  }

  // defaultSelectedRadio = "Public";
  // //Get value on ionChange on IonRadioGroup
  // selectedRadioGroup:any;
  // //Get value on ionSelect on IonRadio item
  // selectedRadioItem:any;

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

  async presentAlertConfirm(content: string) {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertController.create({
      header: 'Confirmation!',
      message: content,
      buttons: [
        {
          text: 'Cancel',
          handler: () => resolveFunction(false)
        }, {
          text: 'Confirm',
          handler: () => resolveFunction(true)
        }
      ]
    });

    await alert.present();
    return promise;
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present()
  }

  Member(click) {
    click.isMember = true;
  }

  checkStatus(item) {
    return !Object.values(item.Member).includes(this.studentId)
  }

  RemoveMember(recordRow,id){
    console.log(recordRow)
    console.log('show confirmation alert')
    this.presentAlertConfirm('Are you sure you want to remove this member?').then(confirm => {
      if (confirm) {
        let record = recordRow.Member;

        for (let i = 0; i < record.length; i++) {
          console.log(record[i])
          if (record[i] == id) {
            record.splice(i, 1);
          }
          this.user.follow_Event(recordRow.id, record);
        }
        console.log(record);
        this.showAlert("Successfully!", "Remove Success!");
        console.log('show remove success alert');
        console.log('Remove Successfully!');
      } else {
        // this.router.navigateByUrl('view-event');
        console.log('Remove Canceled!');
      }
    })

  }

}
