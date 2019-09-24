import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular'
import { UserService } from '../user.service';
@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.page.html',
  styleUrls: ['./staff-login.page.scss'],
})
export class StaffLoginPage implements OnInit {

  emailAddress: string = "";
  password: string = "";
  public type = 'password';
  public showPass = false;

  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  // abcdefg + @cmu.ac.th
  async login() {
    const { emailAddress, password, } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(emailAddress + "@cmu.ac.th", password);
      localStorage.setItem('currentUser', this.emailAddress);
      this.router.navigate(['/tabs'])
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
      buttons: ['OK'],
    })
    await alert.present()
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
      console.log("show text of password!")
    } else {
      this.type = 'password';
      console.log("hide text of password!")
    }
  }

}
