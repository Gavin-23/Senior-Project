import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database/database';
var UserService = /** @class */ (function () {
    function UserService(firestore, afAuth, db) {
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.db = db;
    }
    UserService.prototype.setUser = function (student) {
        this.student = student;
    };
    UserService.prototype.getUsername = function () {
        return this.student.emailAddress;
    };
    UserService.prototype.getStudentId = function () {
        return this.firestore.collection('Students').snapshotChanges();
    };
    UserService.prototype.register = function (record) {
        return this.firestore.collection('Students').add(record);
    };
    UserService.prototype.create_NewEvent = function (record) {
        this.userId = firebase.auth().currentUser.uid;
        return this.firestore.collection('Event').add(record);
    };
    UserService.prototype.read_Event = function () {
        this.userId = firebase.auth().currentUser.uid;
        return this.firestore.collection('Event').snapshotChanges();
    };
    UserService.prototype.read_Personal = function () {
        this.userId = firebase.auth().currentUser.uid;
        return this.firestore.collection('Personal Event').snapshotChanges();
    };
    UserService.prototype.update_Event = function (recordID, record) {
        this.userId = firebase.auth().currentUser.uid;
        this.firestore.doc('Event/' + recordID).update(record);
    };
    UserService.prototype.delete_Event = function (record_id) {
        this.userId = firebase.auth().currentUser.uid;
        this.firestore.doc('Event/' + record_id).delete();
    };
    UserService.prototype.follow_Event = function (recordID, record) {
        this.firestore.doc('Event/' + recordID).update({ Member: record });
    };
    UserService.prototype.create_PersonalEvent = function (record) {
        return this.firestore.collection('Personal Event').add(record);
    };
    UserService.prototype.update_PersonalEvent = function (recordID, record) {
        this.userId = firebase.auth().currentUser.uid;
        this.firestore.doc('Personal Event/' + recordID).update(record);
    };
    UserService.prototype.delete_PersonalEvent = function (record_id) {
        this.userId = firebase.auth().currentUser.uid;
        this.firestore.doc('Personal Event/' + record_id).delete();
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth,
            AngularFireDatabase])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map