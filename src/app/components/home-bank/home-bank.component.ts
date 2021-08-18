import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbDuplicateToastBehaviour } from '@nebular/theme';
import { UserService } from 'src/app/services/user/user.service';
import { AccountService } from 'src/app/services/account/account-bank.service';
import { AccountResponse, account_form, createAccount } from 'src/app/models/createAccount'


@Component({
  selector: 'app-home-bank',
  templateUrl: './home-bank.component.html',
  styleUrls: ['./home-bank.component.scss'],
})

export class HomeBankComponent implements OnInit {

  constructor( public userService: UserService, public service: AccountService, public router: Router){
  }

  infoBank: createAccount = account_form
  userId = this.userService.user.id

  options = [
    { value: 'previous' , label: 'Duplicate previous', checked: true },
    { value: 'all' , label: 'Duplicate all' },
  ];

  option: NbDuplicateToastBehaviour = 'previous';

  buscar(){
    this.service.getInfos().subscribe((res: AccountResponse ) =>{
      console.log(res)

      if(res.status == 'error'){
        this.router.navigate(['/create'])
      }
      this.infoBank = res.data
    }), error => {
      console.log(error);
    }
  }

  Editar(){

    this.service.updateAccount(this.userId, account_form)

  }

  Excluir() {
    this.service.deleteAccount().subscribe((res: AccountResponse)=> {
      console.log(res)
      if(res.status == 'success'){
        this.router.navigate(['/signin'])
      }
    }), error => {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.buscar()
    }

}
