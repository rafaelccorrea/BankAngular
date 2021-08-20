import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbToastrModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import {DiretivasModule} from '../diretivas/diretivas.module'

const routes: Routes = [
  {path: 'create', component: CreateAccountComponent },
  {path: 'update/:id', component: CreateAccountComponent }
]

@NgModule({
  declarations: [
    CreateAccountComponent
],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbToastrModule,
    NbButtonModule,
    NbDialogModule,
    DiretivasModule

  ],
  exports: [RouterModule],
})


export class CreateAccountModule { }
