import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountResponse } from 'src/app/models/createAccount'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8000/api/account';

  private _account: AccountResponse;

  private _url = 'http://localhost:8000/api/account/:id';

  busca: any = {};

  cadastro: any = {};

  constructor( private httpClient: HttpClient) {}

  public get account(): AccountResponse {
    return this._account
  }

  public set account(account: AccountResponse) {
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

  getInfos($event){
    console.log($event);
    this.busca = $event;
    return this.httpClient.get(this._url, $event)
  }

}
