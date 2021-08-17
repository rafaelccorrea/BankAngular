import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDuplicateToastBehaviour, NbToastrService } from '@nebular/theme';
import { SIGNUP_FORM } from 'src/app/models/signup';
import {SignupService} from '../../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent {

  signupForm: FormGroup;

  constructor(private service: SignupService, private formbuilder: FormBuilder, private router: Router, private toastrService: NbToastrService,) {};

  options = [
    { value: 'previous' , label: 'Duplicate previous', checked: true },
    { value: 'all' , label: 'Duplicate all' },
  ];

  option: NbDuplicateToastBehaviour = 'previous';

  ngOnInit() {
    this.signupForm = this.formbuilder.group(SIGNUP_FORM);
  }

  Cadastrar(){
    this.service.cadastrar(this.signupForm.value).subscribe(res => {
      console.log(res);
      this.deleteCampos();
      this.showToast('Cadastrado Com Sucesso!', 'success')
      setTimeout(() => {
        this.router.navigate(['/signin'])
      }, 3000)
    }, error => {
      console.log(error);
      this.showToast('Erro ao Cadastrar!', 'danger')
    })
  }

  deleteCampos(){
    this.signupForm.patchValue(SIGNUP_FORM)
  }

  showToast(message, status) {
    this.toastrService.show(
      message,
      `Opa...`,
      { preventDuplicates: true, duplicatesBehaviour: this.option, status });
  }

}
