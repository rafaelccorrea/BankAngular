import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserResponse } from 'src/app/models/user';
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

  constructor(private service: SigninService, private userService: UserService, private router: Router, private toastrService: NbToastrService){

  };

  login(){

    const logar = {login: this.name, password: this.password}
    this.service.logar(logar).subscribe((res: UserResponse) => {
      console.log(res.data);
      this.userService.user = res.data;
      console.log(this.userService.user)
      localStorage.setItem("Authorization", this.userService.user.token)
      this.deleteCampos();
      this.showToast('top-right', 'success')
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 2000)
    }, error => {
      console.log(error);
    })

  }

  deleteCampos(){
    this.name = '';
    this.password ='';
  }

  showToast(position, status) {
    this.toastrService.show(
      status || 'Success',
      `Toast`,
      { position, status });
    }

}

