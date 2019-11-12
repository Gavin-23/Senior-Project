import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient, private router: Router) { }

  signIn() {
    this.router.navigate(['/sign-in'])
  }
}
