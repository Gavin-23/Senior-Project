import * as tslib_1 from "tslib";
import { Component, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import * as firebase from 'firebase';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
var ViewCalendarPage = /** @class */ (function () {
    // userId: string;
    function ViewCalendarPage(alertCtrl, locale, navCtrl, user, alertController, router) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.navCtrl = navCtrl;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.selectedDate = new Date().toISOString();
        this.eventSource = [];
        this.viewTitle = '';
        this.event = {
            name: '',
            location: '',
            description: '',
            startTime: '',
            endTime: '',
            color: '',
            isEdit: false,
        };
        this.radio_list = [
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
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.userId = firebase.auth().currentUser.uid;
    }
    ViewCalendarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.read_Personal().subscribe(function (data) {
            _this.eventSource = data.map(function (e) {
                console.log(e.payload.doc.data()['UID']);
                console.log(firebase.auth().currentUser.uid);
                if (e.payload.doc.data()['UID'] == firebase.auth().currentUser.uid) {
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
                }
                else {
                    return {
                        isCurrentUser: true,
                        id: '',
                        title: '',
                        startTime: '',
                        endTime: '',
                    };
                }
            });
            console.log("read event successfully!");
            // console.log(this.events[0].StartTime.getTime());
            // this.event =this.events;
            // console.log(this.event)
            // this.eventSource.push(event);
            // this.myCal.loadEvents();
        });
    };
    ViewCalendarPage.prototype.resetEvent = function () {
        this.event = {
            name: '',
            location: '',
            description: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            color: '',
            isEdit: false,
        };
    };
    ViewCalendarPage.prototype.addEvent = function () {
        var _this = this;
        if (this.event.name == "") {
            this.showAlert("Name empty!", "Please continue enter with the missing information!");
            console.log("Name empty!");
            console.log("show name empty alert");
        }
        else if (this.event.description == "") {
            this.showAlert("Description empty!", "Please continue enter with the missing information!");
            console.log("Description empty!");
            console.log("show description empty alert");
        }
        else {
            var eventCopy = {
                name: this.event.name,
                location: this.event.location,
                startTime: new Date(this.event.startTime),
                endTime: new Date(this.event.endTime),
                desc: this.event.description,
                color: this.event.color
            };
            this.userId = firebase.auth().currentUser.uid;
            var record = {};
            record['Name'] = eventCopy.name;
            record['Description'] = eventCopy.desc;
            record['Location'] = eventCopy.location;
            record['StartTime'] = eventCopy.startTime;
            record['EndTime'] = eventCopy.endTime;
            record['Color'] = eventCopy.color;
            record['UID'] = this.userId;
            this.user.create_PersonalEvent(record).then(function (resp) {
                _this.event.name = "";
                _this.event.description = "";
                _this.event.location = "";
                _this.event.startTime = "";
                _this.event.endTime = "";
                _this.event.color = "";
                _this.userId = "";
                _this.showAlert("Successfully", "Create Success!");
                _this.router.navigateByUrl('student-tabs/view-calendar');
                console.log("Create Successfully!");
                console.log("show create successfully alert");
            })
                .catch(function (error) {
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
    };
    ViewCalendarPage.prototype.EditPersonalEvent = function (recordRow) {
        if (recordRow.EditName == "") {
            this.showAlert("Name empty!", "Please continue enter with the missing information!");
            console.log("Name empty!");
            console.log("show name empty alert");
        }
        else if (recordRow.EditDescription == "") {
            this.showAlert("Description empty!", "Please continue enter with the missing information!");
            console.log("Description empty!");
            console.log("show description empty alert");
        }
        else {
            var record = {};
            record['Name'] = recordRow.EditName;
            record['Description'] = recordRow.EditDescription;
            record['Location'] = recordRow.EditLocation;
            record['StartTime'] = new Date(recordRow.EditStart);
            record['EndTime'] = new Date(recordRow.EditEnd);
            record['Color'] = recordRow.EditColor;
            this.user.update_PersonalEvent(recordRow.id, record);
            recordRow.isEdit = false;
            this.showAlert("Successfully!", "Update Successfully!");
            console.log("Update Successfully!");
            console.log("show create successfully alert");
        }
    };
    ViewCalendarPage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditDescription = record.Desc;
        record.EditLocation = record.Localtion;
        record.EditStart = record.StartTime;
        record.EditEnd = record.EndTime;
        record.EditColor = record.Color;
    };
    ViewCalendarPage.prototype.DeletePersonalEvent = function (recordRow) {
        var _this = this;
        console.log('show confirmation alert');
        console.log(recordRow.id);
        this.presentAlertConfirm('Are you sure you want to delete this event?').then(function (confirm) {
            if (confirm) {
                _this.user.delete_PersonalEvent(recordRow.id);
                _this.showAlert("Successfully!", "Delete Success!");
                console.log('show delete success alert');
                console.log('Deleted');
            }
            else {
                _this.router.navigateByUrl('student-tabs/view-calendar');
                console.log('Canceled!');
                console.log('show canceled alert');
            }
        });
    };
    ViewCalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    ViewCalendarPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    ViewCalendarPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    // today() {
    //   this.calendar.currentDate = new Date();
    // }
    ViewCalendarPage.prototype.onEventSelected = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var start, end, resolveFunction, promise, alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = formatDate(event.startTime, 'medium', this.locale);
                        end = formatDate(event.endTime, 'medium', this.locale);
                        promise = new Promise(function (resolve) {
                            resolveFunction = resolve;
                        });
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: this.event.description,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: [
                                    {
                                        text: 'Update',
                                        handler: function () { return _this.EditRecord(event); }
                                    }, {
                                        text: 'Remove',
                                        handler: function () { return _this.DeletePersonalEvent(event); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        this.event = event;
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    ViewCalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ViewCalendarPage.prototype.showAlert = function (title, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewCalendarPage.prototype.presentAlertConfirm = function (content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resolveFunction, promise, alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve) {
                            resolveFunction = resolve;
                        });
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirmation!',
                                message: content,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        handler: function () { return resolveFunction(false); }
                                    }, {
                                        text: 'Confirm',
                                        handler: function () { return resolveFunction(true); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild(CalendarComponent),
        tslib_1.__metadata("design:type", CalendarComponent)
    ], ViewCalendarPage.prototype, "myCal", void 0);
    ViewCalendarPage = tslib_1.__decorate([
        Component({
            selector: 'app-view-calendar',
            templateUrl: './view-calendar.page.html',
            styleUrls: ['./view-calendar.page.scss'],
        }),
        tslib_1.__param(1, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [AlertController, String, NavController,
            UserService,
            AlertController,
            Router])
    ], ViewCalendarPage);
    return ViewCalendarPage;
}());
export { ViewCalendarPage };
//# sourceMappingURL=view-calendar.page.js.map