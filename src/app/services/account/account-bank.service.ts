import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createAccount } from 'src/app/models/createAccount'
import { Observable } from 'rxjs';
import { HeadersService } from '../headers/headers.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8000';

  constructor(
    private httpClient: HttpClient,
    private headersService: HeadersService
  ) { };

  cadastrar($event){
    return this.httpClient.post(`${this.url}/api/account`, $event, { headers: this.headersService.headers })
  }

  getAccount(id: number | string){
    return this.httpClient.get(`${this.url}/api/account/${id}`, { headers: this.headersService.headers })
  }

  getInfos(){
    return this.httpClient.get( `${this.url}/api/account`, { headers: this.headersService.headers })
  }

  updateAccount(id: number | string, request: createAccount):Observable<createAccount>{
    return this.httpClient.put<createAccount>( `${this.url}/api/account/${id}`, request, { headers: this.headersService.headers });
  }

  deleteAccount(){
    return this.httpClient.delete(`${this.url}/api/account/`, { headers: this.headersService.headers });
  }

}
