import { Component, OnInit } from '@angular/core';
import { NbDuplicateToastBehaviour } from '@nebular/theme';
import { UserService } from 'src/app/services/user/user.service';
import { AccountService } from 'src/app/services/account/account-bank.service';
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

  constructor( public userService: UserService, public service: AccountService){

  }

  options = [
    { value: 'previous' , label: 'Duplicate previous', checked: true },
    { value: 'all' , label: 'Duplicate all' },
  ];

  option: NbDuplicateToastBehaviour = 'previous';

  ngOnInit() {

    this.name = this.userService.user.name;

    const busca = {bank_code: this.bank_code, agencia: this.agencia,  conta: this.conta, typeAccount: this.typeAccount, description: this.description }
    this.service.getInfos(busca)
    localStorage.setItem("Authorization", this.userService.user.token)

  }

}
