import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database/database';


interface students {
	emailAddress: string,
	uid: string
}
@Injectable({
	providedIn: 'root'
})

export class UserService {
	private student: students;
	userId: string;
	counter = 0;

	constructor(
		private firestore: AngularFirestore,
		public afAuth: AngularFireAuth,
		private db: AngularFireDatabase
		) {
	}

	setUser(student: students) {
		this.student = student
	}

	getUsername(): string {
		return this.student.emailAddress
	}

	register(record) {
		return this.firestore.collection('Students').add(record);
	}

	create_NewEvent(record) {
		this.userId = firebase.auth().currentUser.uid;
		return this.firestore.collection('Event').add(record);
	}

	

	read_Event() {
		this.userId = firebase.auth().currentUser.uid;
		return this.firestore.collection('Event').snapshotChanges();
	}

	update_Event(recordID, record) {
		this.userId = firebase.auth().currentUser.uid;
		this.firestore.doc('Event/' + recordID).update(record);
	}

	delete_Event(record_id) {
		this.userId = firebase.auth().currentUser.uid;
		this.firestore.doc('Event/' + record_id).delete();
	}

	follow_Event(recordID,record) {
		this.userId = firebase.auth().currentUser.uid;
		this.firestore.doc('Event/' + recordID).update({Member:record});
	}

}