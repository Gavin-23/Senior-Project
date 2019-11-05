import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';

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

  ngOnInit() {
  }

}
