import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomebankModule } from './home-bank/home-bank.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';


@NgModule({
  declarations: [],
  imports: [
    HomebankModule,
    CreateAccountModule,
    SigninModule,
    SignupModule,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class ComponentModule {}
