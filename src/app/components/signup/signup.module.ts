import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from  './signup.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbToastrModule, NbButtonModule, NbDialogModule } from '@nebular/theme';

const routes: Routes = [
  {path: '', component: SignupComponent }
]

@NgModule({
  declarations: [
    SignupComponent
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
    NbDialogModule
  ],
  exports: [RouterModule],
})

export class SignupModule {}
