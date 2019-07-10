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
    public user: UserService,
    ) { }

  ngOnInit() {
  }

  // abcdefg + @gmal.com
  async login(){
    const {emailAddress, password, } = this;

    try{
      // kind of a hack
      const res = await this.afAuth.auth.signInWithEmailAndPassword(emailAddress + "@cmu.ac.th",password)
      this.showAlert("Success!","welcome")
      this.router.navigate(['/tabs'])
			
      
      
    }catch(err) {
      console.dir(err)
      if(err.code === "auth/invalid-email") {
        this.showAlert("Error!", "Email Address can not be empty!")
        return console.log ("Email Address can not be empty!")
      }
      if(err.code === "auth/wrong-password") {
        this.showAlert("Error!", "Email Address or password incorrect!")
        return console.log ("Password can not be empty!")
      }
      if(err.code === "auth/user-not-found"){
        this.showAlert("Error!", "Email Address or password incorrect!")
        return console.log ("user not found")
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
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
 }

}
