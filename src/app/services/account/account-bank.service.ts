import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseAccount } from 'src/app/models/createAccount'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8000/api/account';

  private _account: ResponseAccount;

  cadastro: any = {};

  constructor( private httpClient: HttpClient) {}

  public get account(): ResponseAccount {
    return this._account
  }

  public set account(account: ResponseAccount) {
    this._account = account;
  }

  cadastrar($event){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
    this.cadastro = $event;
    console.log($event);
    return this.httpClient.post(this.url, $event, { headers })
  }

}
