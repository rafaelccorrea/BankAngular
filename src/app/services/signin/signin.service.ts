import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private url = 'http://localhost:8000/signin';

  login: any = {};

  constructor( private HttpClient: HttpClient ) {

  }

  logar($event){
    console.log($event);
    this.login = $event;
    return this.HttpClient.post(this.url, $event)
  }

}
