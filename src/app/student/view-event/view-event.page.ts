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

     this.user.getStudentId().subscribe(data => {
        this.students = data.map(e => {
          if (e.payload.doc.id == firebase.auth().currentUser.uid) {
            return this.studentId = e.payload.doc.data()['studentId']
          }
        })
      });

    this.userId = firebase.auth().currentUser.uid;
  }

  checkStatus(item) {
    return !Object.values(item.Member).includes(this.studentId)
  }

  FollowEvent(recordRow) {

    recordRow.status = !recordRow.status;
    if (recordRow.status == true) {
      let counter = Object.keys(recordRow.Member).length - 1;
      let record = recordRow.Member;
      console.log(this.userId)
      console.log(this.studentId)

      record[counter + 1] = this.studentId;
      console.log(record)

      this.user.follow_Event(recordRow.id, record);
      console.log("Follow Successfully!")
    }

  }

  UnfollowEvent(recordRow) {
    console.log('show confirmation alert')
    this.presentAlertConfirm('Are you sure you want to unfollow this event?').then(confirm => {
      if (confirm) {
        recordRow.status = this.status;
        let record = recordRow.Member;
        for (let i = 0; i < record.length; i++) {
          console.log(record[i])
          if (record[i] == this.studentId) {
            record.splice(i, 1);
          }
          this.user.follow_Event(recordRow.id, record);
        }
        console.log(record);
        this.showAlert("Successfully!", "Unfollow Success!");
        console.log('show unfollow success alert');
        console.log('Unfollow Successfully!');
      } else {
        // this.router.navigateByUrl('view-event');
        console.log('Unfollow Canceled!');
      }
    })


  }
  Detail(click) {
    click.isDetail = true;
  }

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
}
