import { UserResponse } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private url = 'http://localhost:8000/signin';

  login: any = {};

  constructor( private HttpClient: HttpClient ) {

  }

  logar($event):Observable<UserResponse>{
    console.log($event);
    this.login = $event;
    return this.HttpClient.post<any>(this.url, $event)
  }

}
