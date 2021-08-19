import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { account_form } from '../../models/createAccount'
import { AccountService} from '../../services/account/account-bank.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  mask:string;

  cpfcnpjmask() {
    const value = this.createAccountForm.get('document_number').value;
    console.log(value, value.length,this.createAccountForm)
    if(value.length <= 14) {
      this.mask = '00.000.000/0000-00'
    }
    else {
      this.mask = '00.000.0000-00'
    }
  }

  id: string = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private service: AccountService,
     private formbuilder: FormBuilder,
     private router: Router,
     private toastrService: NbToastrService,
     private activatedRoute: ActivatedRoute
     ) {};

  ngOnInit() {
    this.createAccountForm = this.formbuilder.group(account_form);
    if(this.id){
      this.service.getAccount(this.id).subscribe((res: any) => {
        console.log(res);
        this.createAccountForm.patchValue(res.data)
      })
    }
  }

  editar(){
    this.service.updateAccount(this.id, this.createAccountForm.value).subscribe(res => {
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

  salvar(){
    if(this.id){
        this.editar()
    }else{
      this.cadastrar()
    }
  }

  cadastrar(){
    this.service.cadastrar(this.createAccountForm.value).subscribe(res => {
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
    this.createAccountForm.patchValue(account_form)
  }

  showToast(position, status) {
    this.toastrService.show(
      status || 'Online!',
      `Criado com Sucesso!`,
      { position, status });
    }

}
