import { Component, OnInit, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements CanActivate, OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(state.url === '/sign-in') {
        window.location.href = (next.data as any).externalUrl;
      } else if(state.root.queryParams.code) {
        const { code } = state.root.queryParams

        console.log(code)
        // console.log(state)
        // console.log("base uri = " + '')
        // const { code } = state.root.queryParams
        // const params = new HttpParams({
        //   fromObject: {
        //     code,
        //     redirect_uri: '',
        //     // redirect_uri: 'http://scott.dto.technology',
        //     client_id: 'gQJfMeuvJCUDnZaxEvw8Qu2cKK3cuxx8BqTmBpDf',
        //     client_secret: 'CHzXr9K5Yg21GXXYYFGansameVb7f06s2qGf4fXK',
        //     grant_type: 'authorization_code',
        //   }
        // });
      }
       else {
        this.router.navigate(['/sign-in'])
      }
      return true;
  }

}