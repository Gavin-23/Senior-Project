import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';
import { ApiService } from '../itsc/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // selectedLanguage:string;

  // constructor(private translateConfigService: TranslateConfigService){
  //   this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  // }

  // languageChanged(){
  //   this.translateConfigService.setLanguage(this.selectedLanguage);
  // }

  imageUrl : "../../assets/logo.jpeg";

  constructor(public itsc: ApiService) {}
   
  ngOnInit() {
  }

  studentLogin() {
    this.itsc.signIn();
  }

}
