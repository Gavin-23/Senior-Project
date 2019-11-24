import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar'
import { AlertController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import * as firebase from 'firebase';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.page.html',
  styleUrls: ['./view-calendar.page.scss'],
})
export class ViewCalendarPage implements OnInit {
  selectedDate = new Date().toISOString();
  userId: string;
  events: any;
  eventSource = [];
  viewTitle = '';

  event = {
    name: '',
    location: '',
    description: '',
    startTime: '',
    endTime: '',
    color: '',
    isEdit: false,
  };


  radio_list = [
    {
      id: '1',
      name: 'radio_list',
      value: 'black',
      text: 'Black',
      color: 'dark',
      disabled: false,
      checked: false,
    }, {
      id: '2',
      name: 'radio_list',
      value: 'green',
      text: 'Green',
      color: 'success',
      disabled: false,
      checked: true,
    }, {
      id: '3',
      name: 'radio_list',
      value: 'yellow',
      text: 'Yellow',
      color: 'warning',
      disabled: false,
      checked: true,
    }, {
      id: '4',
      name: 'radio_list',
      value: 'purple',
      text: 'Purple',
      color: 'tertiary',
      disabled: false,
      checked: true,
    }, {
      id: '5',
      name: 'radio_list',
      value: 'red',
      text: 'Red',
      color: 'danger',
      disabled: false,
      checked: true,
    },
  ];



  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  // userId: string;

  constructor(private alertCtrl: AlertController,
    @Inject(LOCALE_ID)
    private locale: string,
    public navCtrl: NavController,
    public user: UserService,
    private alertController: AlertController,
    private router: Router

  ) {
    this.userId = firebase.auth().currentUser.uid;
  }

  ngOnInit() {
    this.user.read_Personal().subscribe(data => {
      this.eventSource = data.map(e => {
        console.log(e.payload.doc.data()['UID']);
        console.log(firebase.auth().currentUser.uid);
        // if (e.payload.doc.data()['UID'] == firebase.auth().currentUser.uid) {
          return {
            isCurrentUser: false,
            id: e.payload.doc.id,
            title: e.payload.doc.data()['Name'],
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
            Desc: e.payload.doc.data()['Description'],
            Localtion: e.payload.doc.data()['Location'],
            startTime: e.payload.doc.data()['StartTime'].toDate(),
            endTime: e.payload.doc.data()['EndTime'].toDate(),
            Color: e.payload.doc.data()['Color'],
          };
        // } else {
        //   return {
        //     isCurrentUser: true,
        //     id: '',
        //     title: '',
        //     startTime: '',
        //     endTime: '',
        //   }
        // }
      })
      console.log("read event successfully!");

      // console.log(this.events[0].StartTime.getTime());
      // this.event =this.events;
      // console.log(this.event)
      // this.eventSource.push(event);
      // this.myCal.loadEvents();
    });

  }

  resetEvent() {
    this.event = {
      name: '',
      location: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      color: '',
      isEdit: false,
    };
  }

  addEvent() {
    if (this.event.name == "") {
      this.showAlert("Name empty!", "Please continue enter with the missing information!");
      console.log("Name empty!");
      console.log("show name empty alert")

    } else if (this.event.description == "") {
      this.showAlert("Description empty!", "Please continue enter with the missing information!");
      console.log("Description empty!");
      console.log("show description empty alert")

    } else {
      let eventCopy = {
        name: this.event.name,
        location: this.event.location,
        startTime: new Date(this.event.startTime),
        endTime: new Date(this.event.endTime),
        desc: this.event.description,
        color: this.event.color
      }

      this.userId = firebase.auth().currentUser.uid
      let record = {};
      record['Name'] = eventCopy.name;
      record['Description'] = eventCopy.desc;
      record['Location'] = eventCopy.location;
      record['StartTime'] = eventCopy.startTime;
      record['EndTime'] = eventCopy.endTime;
      record['Color'] = eventCopy.color;
      record['UID'] = this.userId;

      this.user.create_PersonalEvent(record).then(resp => {
        this.event.name = "";
        this.event.description = "";
        this.event.location = "";
        this.event.startTime = "";
        this.event.endTime = "";
        this.event.color = "";
        this.userId = "";
        this.showAlert("Successfully", "Create Success!");
        this.router.navigateByUrl('student-tabs/view-calendar');
        console.log("Create Successfully!")
        console.log("show create successfully alert")
      })
        .catch(error => {
          console.log(error);
        });

      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      console.log(this.eventSource[0].endTime);

      // if (eventCopy.allDay) {
      //   let start = eventCopy.startTime;
      //   let end = eventCopy.endTime;

      //   eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      //   eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
      // }


    }
  }

  EditPersonalEvent(recordRow) {
    if (recordRow.EditName == "") {
      this.showAlert("Name empty!", "Please continue enter with the missing information!");
      console.log("Name empty!");
      console.log("show name empty alert")

    } else if (recordRow.EditDescription == "") {
      this.showAlert("Description empty!", "Please continue enter with the missing information!");
      console.log("Description empty!");
      console.log("show description empty alert")
    } else {
      let record = {};
      record['Name'] = recordRow.EditName;
      record['Description'] = recordRow.EditDescription;
      record['Location'] = recordRow.EditLocation;
      record['StartTime'] = new Date(recordRow.EditStart);
      record['EndTime'] = new Date(recordRow.EditEnd);
      record['Color'] = recordRow.EditColor;
      this.user.update_PersonalEvent(recordRow.id, record);
      recordRow.isEdit = false;
      this.showAlert("Successfully!", "Update Successfully!");
      console.log("Update Successfully!")
      console.log("show create successfully alert")
    }
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditDescription = record.Desc;
    record.EditLocation = record.Localtion;
    record.EditStart = record.StartTime;
    record.EditEnd = record.EndTime;
    record.EditColor = record.Color;

  }

  DeletePersonalEvent(recordRow) {
    console.log('show confirmation alert');
    console.log(recordRow.id);

    this.presentAlertConfirm('Are you sure you want to delete this event?').then(confirm => {

      if (confirm) {
        this.user.delete_PersonalEvent(recordRow.id);
        this.showAlert("Successfully!", "Delete Success!");
        console.log('show delete success alert');
        console.log('Deleted');
      } else {
        this.router.navigateByUrl('student-tabs/view-calendar');
        console.log('Canceled!');
        console.log('show canceled alert');
      }
    })
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  // today() {
  //   this.calendar.currentDate = new Date();
  // }

  async onEventSelected(event) {
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: this.event.description,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: [
        {
          text: 'Update',

          handler: () => this.EditRecord(event)

        }, {
          text: 'Remove',
          handler: () => this.DeletePersonalEvent(event)
        }
      ]
    });
    alert.present();
    this.event = event
    return promise;

  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present()
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
  // onTimeSelected(ev) {
  //   let selected = new Date(ev.selectedTime);
  //   this.event.startTime = selected.toISOString();
  //   selected.setHours(selected.getHours() + 1);
  //   this.event.endTime = (selected.toISOString());
  // }
}
