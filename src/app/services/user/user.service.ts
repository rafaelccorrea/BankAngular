import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: User;

  constructor() { }

  public set user(user: User) {
    this._user = user;
  }

  public get user():User {
    return this._user
  }

}
