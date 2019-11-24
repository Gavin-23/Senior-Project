import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.page.html',
  styleUrls: ['./student-login.page.scss'],
})
export class StudentLoginPage implements OnInit {

  emailAddress: string = "";
  password: string = "";
  public type = 'password';
  public showPass = false;


  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController, 
    public router: Router) { }

  ngOnInit() {
  }
  async login() {
    const { emailAddress, password, } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(emailAddress, password)
      this.router.navigate(['/student-tabs'])
      return console.log("Successful!")


    } catch (err) {
      console.dir(err)
      if (err.code === "auth/invalid-email") {
        this.showAlert("Error!", "Email account cannot be empty.")
        console.log("Email account cannot be empty!")
        console.log("show emial empty alert")
      }
      if (err.code === "auth/wrong-password") {
        this.showAlert("Error!", "Your account or password is not correct, please enter it again.")
        console.log("Wrong password!")
        console.log("show auth/wrong-password alert")

      }
      if (err.code === "auth/user-not-found") {
        this.showAlert("Error!", "Your account or password is not correct, please enter it again.")
        console.log("user not found!")
        console.log("show auth/user-not-found alert")

      }
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