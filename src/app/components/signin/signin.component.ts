import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbDuplicateToastBehaviour, NbToastrService } from '@nebular/theme';
import { UserResponse } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account/account-bank.service';
import { UserService } from 'src/app/services/user/user.service';
import { SigninService } from '../../services/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  name: string;
  password: string;

  constructor(private service: SigninService, private userService: UserService, private router: Router, private toastrService: NbToastrService, private accountService: AccountService){

  };

  options = [
    { value: 'previous' , label: 'Duplicate previous', checked: true },
    { value: 'all' , label: 'Duplicate all' },
  ];

  option: NbDuplicateToastBehaviour = 'previous';

  login(){

    const logar = {login: this.name, password: this.password}
    this.service.logar(logar).subscribe((res: UserResponse) => {
        console.log(res.data);
        this.userService.user = res.data;
        console.log(this.userService.user)
        localStorage.setItem("Authorization", this.userService.user.token)
        this.deleteCampos();
        this.showToast('Logado Com Sucesso!', 'success')
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 2000)
    }, error => {
      this.showToast('Erro ao Entrar!', 'danger')
      console.log(error);
    })
  }

  deleteCampos(){
    this.name = '';
    this.password ='';
  }

  showToast(message, status) {
    this.toastrService.show(
      message,
      `Opa...`,
      { preventDuplicates: true, duplicatesBehaviour: this.option, status });
  }

}

