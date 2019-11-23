import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
var EventListPage = /** @class */ (function () {
    function EventListPage(http, afstore, user, alertController, router) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.status = false;
        // defaultSelectedRadio = "Public";
        // //Get value on ionChange on IonRadioGroup
        // selectedRadioGroup:any;
        // //Get value on ionSelect on IonRadio item
        // selectedRadioItem:any;
        this.radio_list = [
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
        this.userId = firebase.auth().currentUser.uid;
    }
    EventListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.read_Event().subscribe(function (data) {
            _this.event = data.map(function (e) {
                if (e.payload.doc.data()['UID'] !== firebase.auth().currentUser.uid) {
                    return { isCurrentUser: true };
                }
                else {
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
            });
            console.log(_this.event);
            console.log("read event successfully!");
        });
    };
    EventListPage.prototype.RemoveRecord = function (rowID) {
        var _this = this;
        console.log('show confirmation alert');
        this.presentAlertConfirm('Are you sure you want to delete this event?').then(function (confirm) {
            if (confirm) {
                _this.user.delete_Event(rowID);
                _this.showAlert("Successfully!", "Delete Success!");
                console.log('show delete success alert');
                console.log('Deleted');
            }
            else {
                _this.router.navigateByUrl('tabs/event-list');
                console.log('Canceled!');
                console.log('show canceled alert');
            }
        });
    };
    EventListPage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditDescription = record.Desc;
        record.EditLocation = record.Localtion;
        record.EditTime = record.Time;
        record.EditScope = record.Scope;
        record.EditType = record.Type;
    };
    EventListPage.prototype.UpdateRecord = function (recordRow) {
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
        else if (recordRow.EditLocation == "") {
            this.showAlert("Location empty!", "Please continue enter with the missing information!");
            console.log("Location empty!");
            console.log("show location empty alert");
        }
        else if (recordRow.EditTime == "") {
            this.showAlert("Time empty!", "Please continue enter with the missing information!");
            console.log("Time empty!");
            console.log("show time empty alert");
        }
        else if (recordRow.EditScopee == "") {
            this.showAlert("Scope empty!", "Please continue enter with the missing information!");
            console.log("Scope empty!");
            console.log("show scope empty alert");
        }
        else if (recordRow.EditType == "") {
            this.showAlert("Type empty!", "Please continue enter with the missing information!");
            console.log("Type empty!");
            console.log("show type empty alert");
        }
        else {
            var record = {};
            record['Name'] = recordRow.EditName;
            record['Description'] = recordRow.EditDescription;
            record['Location'] = recordRow.EditLocation;
            record['Time'] = recordRow.EditTime;
            record['Scope'] = recordRow.EditScope;
            record['Type'] = recordRow.EditType;
            this.user.update_Event(recordRow.id, record);
            recordRow.isEdit = false;
            this.showAlert("Successfully!", "Update Successfully!");
            console.log("Update Successfully!");
            console.log("show create successfully alert");
        }
    };
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
    EventListPage.prototype.presentAlertConfirm = function (content) {
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
    EventListPage.prototype.showAlert = function (title, content) {
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
    EventListPage.prototype.Member = function (click) {
        click.isMember = true;
    };
    EventListPage.prototype.checkStatus = function (item) {
        return !Object.values(item.Member).includes(this.studentId);
    };
    EventListPage.prototype.RemoveMember = function (recordRow, id) {
        var _this = this;
        console.log(recordRow);
        console.log('show confirmation alert');
        this.presentAlertConfirm('Are you sure you want to remove this member?').then(function (confirm) {
            if (confirm) {
                var record = recordRow.Member;
                for (var i = 0; i < record.length; i++) {
                    console.log(record[i]);
                    if (record[i] == id) {
                        record.splice(i, 1);
                    }
                    _this.user.follow_Event(recordRow.id, record);
                }
                console.log(record);
                _this.showAlert("Successfully!", "Remove Success!");
                console.log('show remove success alert');
                console.log('Remove Successfully!');
            }
            else {
                // this.router.navigateByUrl('view-event');
                console.log('Remove Canceled!');
            }
        });
    };
    EventListPage = tslib_1.__decorate([
        Component({
            selector: 'app-event-list',
            templateUrl: './event-list.page.html',
            styleUrls: ['./event-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            AngularFirestore,
            UserService,
            AlertController,
            Router])
    ], EventListPage);
    return EventListPage;
}());
export { EventListPage };
//# sourceMappingURL=event-list.page.js.map