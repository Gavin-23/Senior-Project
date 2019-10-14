import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar'
import { AlertController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.page.html',
  styleUrls: ['./view-calendar.page.scss'],
})
export class ViewCalendarPage implements OnInit {
  // colors: Array<string> = ['#d435a2', '#a834bf', '#6011cf', '#0d0e81', '#0237f1', '#0d8bcd', '#16aca4', '#3c887e', '#157145', '#57a773', '#88aa3d', '#b7990d', '#fcbf55', '#ff8668', '#ff5c6a', '#c2454c', '#c2183f', '#d8226b', '#8f2d56', '#482971', '#000000', '#561f37', '#433835', '#797979', '#819595'];
  // color: string = '#d435a2';

  selectedDate = new Date().toISOString();

  event = {
    name: '',
    location: '',
    description: '',
    startTime: '',
    endTime: '',
  };

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  viewTitle = '';

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  // userId: string;

  constructor(private alertCtrl: AlertController,
    @Inject(LOCALE_ID)
    private locale: string,
    public navCtrl: NavController
  ) {
    // this.userId = firebase.auth().currentUser.uid;
  }

  ngOnInit() {
    // this.resetEvent();
  }

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

  resetEvent() {
    this.event = {
      name: '',
      location: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    };
  }

  addEvent() {
    let eventCopy = {
      name: this.event.name,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      desc: this.event.description


      // this.userId = firebase.auth().currentUser.uid
      // let record = {};
      // record['Name'] = this.name;
      // record['Description'] = this.desc;
      // record['Location'] = this.localtion;
      // record['Time'] = this.time;
      // record['Scope'] = this.scope;
      // record['Type'] = this.type;
      // record['UID'] = this.userId;
      // // record['Status'] = this.status;
      // record['Member'] = [];

      // this.user.create_NewEvent(record).then(resp => {
      //   this.name = "";
      //   this.desc = "";
      //   this.localtion = "";
      //   this.time = "";
      //   this.scope = "";
      //   this.type = "";
      //   this.userId = "";
      //   // this.status = false;
      //   this.member = [];
      //   this.showAlert("Successfully", "Create Success!");
      //   this.router.navigateByUrl('tabs/event-list');
      //   console.log("Create Successfully!")
      //   console.log("show create successfully alert")
      // })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }

    // if (eventCopy.allDay) {
    //   let start = eventCopy.startTime;
    //   let end = eventCopy.endTime;

    //   eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
    //   eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    // }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    // this.resetEvent();
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
    let end = formatDate(event.startTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: [
        {
          text: 'Update',
        }, {
          text: 'Remove',
          handler: () => this.resetEvent()
        }
      ]
    })
    alert.present();

  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }

  // prepareColorSelector() {
  //   setTimeout(() => {
  //     let buttonElements = document.querySelectorAll('div.alert-radio-group button');
  //     if (!buttonElements.length) {
  //       this.prepareColorSelector();
  //     } else {
  //       for (let index = 0; index < buttonElements.length; index++) {
  //         let buttonElement = buttonElements[index];
  //         let optionLabelElement = buttonElement.querySelector('.alert-radio-label');
  //         let color = optionLabelElement.innerHTML.trim();

  //         if (this.isHexColor(color)) {
  //           buttonElement.classList.add('colorselect', 'color_' + color.slice(1, 7));
  //           if (color == this.color) {
  //             buttonElement.classList.add('colorselected');
  //           }
  //         }
  //       }
  //     }
  //   }, 100);
  // }

  // isHexColor(color) {
  //   let hexColorRegEx = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  //   return hexColorRegEx.test(color);
  // }

  // selectColor(color) {
  //   let buttonElements = document.querySelectorAll('div.alert-radio-group button.colorselect');
  //   for (let index = 0; index < buttonElements.length; index++) {
  //     let buttonElement = buttonElements[index];
  //     buttonElement.classList.remove('colorselected');
  //     if (buttonElement.classList.contains('color_' + color.slice(1, 7))) {
  //       buttonElement.classList.add('colorselected');
  //     }
  //   }
  // }

  // setColor(color) {
  //   console.log('Selected Color is', color);

  // }
}
