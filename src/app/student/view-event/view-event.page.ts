import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { } from '@angular/fire/database';
import { UserService } from 'src/app/user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {
  event: any;
  name: string;
  desc: string;
  localtion: string;
  time: string;
  scope: string;
  type: string;
  status = false;
  userId: string;


  constructor(
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    private alertController: AlertController,
    private router: Router,
    private afStorage: AngularFireStorage
  ) {
  }

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
          Member: e.payload.doc.data()['Member'],
        };
      })

      console.log(this.event);
      console.log("read event successfully!");
    });
    this.userId = firebase.auth().currentUser.uid;

  }

  checkStatus(item){
    return !Object.values(item.Member).includes(this.userId)
  }

  FollowEvent(recordRow) {
    this.userId = firebase.auth().currentUser.uid;
    recordRow.status = !recordRow.status;
    if (recordRow.status == true) {
      let counter = Object.keys(recordRow.Member).length-1;
      let record = recordRow.Member;
      record[counter+1]=this.userId;
      this.user.follow_Event(recordRow.id, record);
      console.log("Follow Successfully!")
      console.log("show follow successfully alert")
    } 
  }

  UnFollowEvent(recordRow) {
    recordRow.status = this.status;
    let record = recordRow.Member;
    console.log(this.userId)
    for(let i=0;i<record.length;i++){
      console.log(record[i])
        if(record[i]==this.userId){
          record.splice(i, 1);
        }
        this.user.follow_Event(recordRow.id, record);
    }
    console.log(record);
    
  }
  Detail(click) {
    click.isDetail = true;
  }
}
