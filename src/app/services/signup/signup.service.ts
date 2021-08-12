import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url = 'http://localhost:8000/signup';

  cadastro: any = {};

  constructor( private HttpClient: HttpClient ) {}

  cadastrar($event){
    console.log($event);
    this.cadastro = $event;
    return this.HttpClient.post(this.url, $event)
  }

}
