import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
var CreateEventPage = /** @class */ (function () {
    // status= false;
    function CreateEventPage(http, afstore, user, alertController, router) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.defaultSelectedRadio = "Public";
        //Get value on ionChange on IonRadioGroup
        //selectedRadioGroup:any;
        //Get value on ionSelect on IonRadio item
        //selectedRadioItem:any;
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
    }
    CreateEventPage.prototype.ngOnInit = function () {
    };
    CreateEventPage.prototype.CreateRecord = function () {
        var _this = this;
        if (this.name == "") {
            this.showAlert("Name empty!", "Please continue enter with the missing information!");
            console.log("Name empty!");
            console.log("show name empty alert");
        }
        else if (this.desc == "") {
            this.showAlert("Description empty!", "Please continue enter with the missing information!");
            console.log("Description empty!");
            console.log("show description empty alert");
        }
        else if (this.localtion == "") {
            this.showAlert("Location empty!", "Please continue enter with the missing information!");
            console.log("Location empty!");
            console.log("show location empty alert");
        }
        else if (this.time == "") {
            this.showAlert("Time empty!", "Please continue enter with the missing information!");
            console.log("Time empty!");
            console.log("show time empty alert");
        }
        else if (this.scope == "") {
            this.showAlert("Scope empty!", "Please continue enter with the missing information!");
            console.log("Scope empty!");
            console.log("show scope empty alert");
        }
        else if (this.type == "") {
            this.showAlert("Type empty!", "Please continue enter with the missing information!");
            console.log("Type empty!");
            console.log("show type empty alert");
        }
        else {
            this.userId = firebase.auth().currentUser.uid;
            var record = {};
            record['Name'] = this.name;
            record['Description'] = this.desc;
            record['Location'] = this.localtion;
            record['Time'] = this.time;
            record['Scope'] = this.scope;
            record['Type'] = this.type;
            record['UID'] = this.userId;
            // record['Status'] = this.status;
            record['Member'] = [];
            this.user.create_NewEvent(record).then(function (resp) {
                _this.name = "";
                _this.desc = "";
                _this.localtion = "";
                _this.time = "";
                _this.scope = "";
                _this.type = "";
                _this.userId = "";
                // this.status = false;
                _this.member = [];
                _this.showAlert("Successfully", "Create Success!");
                _this.router.navigateByUrl('tabs/event-list');
                console.log("Create Successfully!");
                console.log("show create successfully alert");
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    CreateEventPage.prototype.showAlert = function (title, content) {
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
    CreateEventPage = tslib_1.__decorate([
        Component({
            selector: 'app-create-event',
            templateUrl: './create-event.page.html',
            styleUrls: ['./create-event.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            AngularFirestore,
            UserService,
            AlertController,
            Router])
    ], CreateEventPage);
    return CreateEventPage;
}());
export { CreateEventPage };
//# sourceMappingURL=create-event.page.js.map