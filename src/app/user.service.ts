import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	constructor(
		private auth: AngularFireAuth,
		private firestore: AngularFirestore,
		private afStorage: AngularFireStorage

	) { }


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