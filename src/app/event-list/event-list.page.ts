import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import {  } from '@angular/fire/database';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
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
      console.log(this.event);
 
    });
  }

  CreateRecord() {
    let record = {}
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
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.user.delete_Event(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditDescription = record.Desc;
    record.EditLocation = record.Localtion;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Description'] = recordRow.EditDescription;
    record['Location'] = recordRow.EditLocation;
    this.user.update_Event(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
