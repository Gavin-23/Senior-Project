import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	emailAddress: string,
	uid: string
}

@Injectable({
	providedIn: 'root'
  })

export class UserService {
	private user: user

	constructor(private firestore: AngularFirestore) {}

	create_NewEvent(record) {
		return this.firestore.collection('Event').add(record);
	  }
	 
	  read_Event() {
		return this.firestore.collection('Event').snapshotChanges();
	  }
	 
	  update_Event(recordID,record){
		this.firestore.doc('Event/' + recordID).update(record);
	  }
	 
	  delete_Event(record_id) {
		this.firestore.doc('Event/' + record_id).delete();
	  }

	
}