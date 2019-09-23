import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { } from '@angular/fire/database';
import { UserService } from 'src/app/user.service';
import { AngularFireStorage } from '@angular/fire/storage';

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
        };
      })
      console.log(this.event);
      console.log("read event successfully!");
    });
  }

  showStatus(record) {
    record.isEdit = true;
    record.FollowName = record.Name;
    record.FollowDescription = record.Desc;
    record.FollowLocation = record.Localtion;
    record.FollowTime = record.Time;
    record.FollowScope = record.Scope;
    record.FollowType = record.Type;
    record.FollowStatus = record.status;
  }

  FollowEvent(recordRow) {
    this.status = !this.status;

    if (this.status == true) {
      let record = {};
      record['Name'] = recordRow.FollowName;
      record['Description'] = recordRow.FollowDescription;
      record['Location'] = recordRow.FollowLocation;
      record['Time'] = recordRow.FollowTime;
      record['Scope'] = recordRow.FollowScope;
      record['Type'] = recordRow.FollowType;
      record['Status'] = recordRow.FollowStatus;
      this.user.update_Event(recordRow.id, record);
      recordRow.isEdit = false;
      console.log("Update Successfully!")
      console.log("show create successfully alert")
    }

  }
  Detail(click) {
    click.isDetail = true;
  }
}
