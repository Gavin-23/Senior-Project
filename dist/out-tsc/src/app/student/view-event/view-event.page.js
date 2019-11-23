import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
var ViewEventPage = /** @class */ (function () {
    function ViewEventPage(http, afstore, user, alertController, router, afStorage) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.afStorage = afStorage;
        this.status = false;
    }
    ViewEventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.read_Event().subscribe(function (data) {
            _this.event = data.map(function (e) {
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
            });
            console.log(_this.event);
            console.log("read event successfully!");
        });
        this.user.getStudentId().subscribe(function (data) {
            _this.students = data.map(function (e) {
                if (e.payload.doc.id == firebase.auth().currentUser.uid) {
                    return _this.studentId = e.payload.doc.data()['studentId'];
                }
            });
        });
        this.userId = firebase.auth().currentUser.uid;
    };
    ViewEventPage.prototype.checkStatus = function (item) {
        return !Object.values(item.Member).includes(this.studentId);
    };
    ViewEventPage.prototype.FollowEvent = function (recordRow) {
        recordRow.status = !recordRow.status;
        if (recordRow.status == true) {
            var counter = Object.keys(recordRow.Member).length - 1;
            var record = recordRow.Member;
            console.log(this.userId);
            console.log(this.studentId);
            record[counter + 1] = this.studentId;
            console.log(record);
            this.user.follow_Event(recordRow.id, record);
            console.log("Follow Successfully!");
        }
    };
    ViewEventPage.prototype.UnfollowEvent = function (recordRow) {
        var _this = this;
        console.log('show confirmation alert');
        this.presentAlertConfirm('Are you sure you want to unfollow this event?').then(function (confirm) {
            if (confirm) {
                recordRow.status = _this.status;
                var record = recordRow.Member;
                for (var i = 0; i < record.length; i++) {
                    console.log(record[i]);
                    if (record[i] == _this.studentId) {
                        record.splice(i, 1);
                    }
                    _this.user.follow_Event(recordRow.id, record);
                }
                console.log(record);
                _this.showAlert("Successfully!", "Unfollow Success!");
                console.log('show unfollow success alert');
                console.log('Unfollow Successfully!');
            }
            else {
                // this.router.navigateByUrl('view-event');
                console.log('Unfollow Canceled!');
            }
        });
    };
    ViewEventPage.prototype.Detail = function (click) {
        click.isDetail = true;
    };
    ViewEventPage.prototype.presentAlertConfirm = function (content) {
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
    ViewEventPage.prototype.showAlert = function (title, content) {
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
    ViewEventPage = tslib_1.__decorate([
        Component({
            selector: 'app-view-event',
            templateUrl: './view-event.page.html',
            styleUrls: ['./view-event.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            AngularFirestore,
            UserService,
            AlertController,
            Router,
            AngularFireStorage])
    ], ViewEventPage);
    return ViewEventPage;
}());
export { ViewEventPage };
//# sourceMappingURL=view-event.page.js.map