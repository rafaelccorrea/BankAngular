import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { account_form } from '../../models/createAccount'
import { AccountService} from '../../services/account/account-bank.service'
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {


  @Input() createAccount: FormGroup;

  constructor(private service: AccountService, private formbuilder: FormBuilder, private router: Router, private toastrService: NbToastrService) {};

  ngOnInit() {
    this.createAccount = this.formbuilder.group(account_form);
  }

  Cadastrar(){
    this.service.cadastrar(this.createAccount.value).subscribe(res => {
      console.log(res);
      this.deleteCampos();
      this.showToast('top-right', 'success')
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 3000)
    }, error => {
      console.log(error);
    })

  }

  deleteCampos(){
    this.createAccount.patchValue(account_form)
  }

  showToast(position, status) {
    this.toastrService.show(
      status || 'Online!',
      `Criado com Sucesso!`,
      { position, status });
    }

}
