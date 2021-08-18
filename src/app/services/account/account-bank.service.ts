import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createAccount } from 'src/app/models/createAccount'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8000';

  private _account: createAccount;

  cadastro: any = {};

  constructor( private httpClient: HttpClient) {}

  public get account(): createAccount {
    return this._account
  }

  public set account(account: createAccount) {
    this._account = account;
  }

  cadastrar($event){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
    this.cadastro = $event;
    console.log($event);
    return this.httpClient.post(`${this.url}/api/account`, $event, { headers })
  }

  getInfos(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
    return this.httpClient.get( `${this.url}/api/account`,{ headers })
  }

  updateAccount(id: number, request: createAccount):Observable<createAccount>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
    return this.httpClient.put<createAccount>( `${this.url}/api/account/${id}`, request, { headers });
  }

  deleteAccount(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
    return this.httpClient.delete(`${this.url}/api/account/`,{ headers });
  }

}
