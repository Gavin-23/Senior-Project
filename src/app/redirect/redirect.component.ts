import { Component, OnInit, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements CanActivate, OnInit {
  emailAddress: string = ""
  userId: string;
  studentId: string;
  event: any;
  password: string = "";

  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    private http: HttpClient,
    public alertController: AlertController,
    public afstore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.user.read_Student().subscribe(data => {
      this.event = data.map(e => {
        return {
          id: e.payload.doc.id,
          StudentId: e.payload.doc.data()['studentId'],
          Account: e.payload.doc.data()['emailAddress']
        };
      })
      console.log(this.event);
    });
    
    if (state.url === '/sign-in') {
      window.location.href = (next.data as any).externalUrl;
    } else if (state.root.queryParams.code) {
      // const { code } = state.root.queryParams

      // console.log(code)
      // console.log(state)
      // console.log("base uri = " + '')
      const { code } = state.root.queryParams
      const params = new HttpParams({
        fromObject: {
          code,
          redirect_uri: 'http://localhost:8100',
          // redirect_uri: 'http://scott.dto.technology',
          client_id: 'J07vZjjb55qryMp3V6fSYuxs7KhwctgsD1RZzGXp',
          client_secret: 'Hf9nHW0e99C7wUBrCRypbY8NZ7YH5AEnk3jSujVn',
          grant_type: 'authorization_code',
        }
      });
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST'

        })
      };

      return this.http.post<any>("https://cors-anywhere.herokuapp.com/https://oauth.cmu.ac.th/v1/GetToken.aspx", params, httpOptions).pipe(map(data => {
        // if (data.token && data.user) {
        //   localStorage.setItem('token', data.token)
        //   localStorage.setItem('currentUser', JSON.stringify(data.user))
        //   if(data.user.authorities.map(authority => authority.name).includes("ROLE_STUDENT"))
        //     localStorage.setItem('studentId', JSON.stringify(data.studentId))
        // }
        console.log(data.access_token)

        this.http.get<any>("https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo", {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${data.access_token}`,
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
          })

        }).subscribe(
        
          info => {
            console.log(this.event.Accoun)
            for(let user of this.event){
              if(user.Account != info.cmuitaccount){
                this.register(info.cmuitaccount,info.student_id)
              }
            }
           
            console.log('success', info)
          },
          error => console.log('oops', error)

        )
        // console.log(this.event)
        this.router.navigate(['/student-tabs/view-event'])
        return data
      }))
    }
    else {
      this.router.navigate(['/login'])
    }
    return true;
  }

  async register(emailAddress,studentId) {
    try {
      let password = "123456"
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(emailAddress, password)

      this.afstore.doc(`Students/${res.user.uid}`).set({
        emailAddress,
        studentId
      })

      this.user.setUser({
        emailAddress,
        uid: res.user.uid,
      })

    } catch (error) {
      console.dir(error)
    }
  }

}