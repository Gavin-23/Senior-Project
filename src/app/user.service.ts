import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import * as firebase from 'firebase';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	userId: string;

	constructor(
		private firestore: AngularFirestore,
		public afAuth: AngularFireAuth,
		

	) { 
		this.userId = firebase.auth().currentUser.uid
	}


	create_NewEvent(record) {
		return this.firestore.collection('Event').add(record);
	}

	read_Event() {

		return this.firestore.collection('Event').snapshotChanges();
	}

	update_Event(recordID, record) {
		this.firestore.doc('Event/' + recordID).update(record);
	}

	delete_Event(record_id) {
		this.firestore.doc('Event/' + record_id).delete();
	}


	async follow_Event(record) {


	}



}