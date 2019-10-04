import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import * as firebase from 'firebase';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  emailAddress: string = ""
  password: string = ""
  public type = 'password';
  public showPass = false;
  userId: string;
  studentId: number

  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController,
    public afstore: AngularFirestore,
    public router: Router,
    public user: UserService,
  ) { }

  ngOnInit() {
  }

  async register() {
    const { emailAddress, password, studentId } = this

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(emailAddress + '@cmu.ac.th', password)

      this.afstore.doc(`Students/${res.user.uid}`).set({
        studentId
      })

      this.user.setUser({
        emailAddress,
        uid: res.user.uid
      })
        this.showAlert("Successful!", "Register Successful!")
        this.router.navigate(['/login'])
        return console.log("Successful!")

    } catch (error) {
      console.dir(error)
    }
  }



  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}

