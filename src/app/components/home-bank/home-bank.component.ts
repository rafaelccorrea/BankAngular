import { Component, OnInit } from '@angular/core';
import { NbDuplicateToastBehaviour } from '@nebular/theme';
import { UserService } from 'src/app/services/user/user.service';
import { AccountService } from 'src/app/services/account/account-bank.service';
import { AccountResponse } from 'src/app/models/createAccount'
@Component({
  selector: 'app-home-bank',
  templateUrl: './home-bank.component.html',
  styleUrls: ['./home-bank.component.scss'],
})

export class HomeBankComponent implements OnInit {

  constructor( public userService: UserService, public service: AccountService){
  }

  infoBank: any = []

  options = [
    { value: 'previous' , label: 'Duplicate previous', checked: true },
    { value: 'all' , label: 'Duplicate all' },
  ];

  option: NbDuplicateToastBehaviour = 'previous';

  buscar(){
    this.service.getInfos().subscribe((res: AccountResponse ) =>{
      console.log('InfoBank',res.data);
      this.infoBank = res.data
    }), error => {
      console.log(error);
    }
  }

  Editar(){

  }

  Excluir() {
    this.infoBank.delete(this.service.deleteAccount().subscribe((res: AccountResponse ) =>{
      console.log('InfoBank',res.data);
      this.infoBank = res.data
    }), error => {
      console.log(error);
    }
    )
  }

  ngOnInit(): void {
    this.buscar()
    }

}
