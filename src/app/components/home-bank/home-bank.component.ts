import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account-bank.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-home-bank',
  templateUrl: './home-bank.component.html',
  styleUrls: ['./home-bank.component.scss'],
})

export class HomeBankComponent implements OnInit {

  name: string;
  bank_code: string;
  agencia:string;
  conta:string;
  typeAccount:string;
  description: string;
  initial = new Date();

  constructor( public userService: UserService, public accountService: AccountService){

  }

  ngOnInit() {
    this.name = this.userService.user.name;
    this.bank_code = this.accountService.account.data.bank_code;
    this.agencia = this.accountService.account.data.agencia;
    this.conta = this.accountService.account.data.conta;
    this.typeAccount = this.accountService.account.data.typeAccount;
    this.description = this.accountService.account.data.description;
    this.initial = this.initial
  }

}
