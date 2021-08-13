import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8000/api/account';

  cadastro: any = {};


  constructor( private httpClient: HttpClient ) {}

  cadastrar($event){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
    console.log($event);
    this.cadastro = $event;
    return this.httpClient.post(this.url, $event, { headers })
  }

}
