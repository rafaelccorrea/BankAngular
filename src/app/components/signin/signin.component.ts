import { Component } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  name: string;
  password: string;

  constructor(private service: SigninService){

  };

  login(){

    const logar = {login: this.name, password: this.password}
    this.service.logar(logar).subscribe(res => {
      console.log(res);
      this.deleteCampos();
    }, error => {
      console.log(error);
    })

  }

  deleteCampos(){
    this.name = '';
    this.password ='';
  }

}

