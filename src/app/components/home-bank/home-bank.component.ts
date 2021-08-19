import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDuplicateToastBehaviour } from '@nebular/theme';
import { UserService } from 'src/app/services/user/user.service';
import { AccountService } from 'src/app/services/account/account-bank.service';
import { AccountResponse, account_form, createAccount } from 'src/app/models/createAccount'
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-home-bank',
  templateUrl: './home-bank.component.html',
  styleUrls: ['./home-bank.component.scss'],
})

export class HomeBankComponent implements OnInit {

  constructor( public userService: UserService,
    public service: AccountService,
    public router: Router,
    private dialogService: NbDialogService){

    }

    infoBank: createAccount = account_form

    options = [
      { value: 'previous' , label: 'Duplicate previous', checked: true },
    { value: 'all' , label: 'Duplicate all' },
  ];

  option: NbDuplicateToastBehaviour = 'previous';

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

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
