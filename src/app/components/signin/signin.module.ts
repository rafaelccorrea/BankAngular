import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from  './signin.component'
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbToastrModule, NbButtonModule, NbDialogModule } from '@nebular/theme';

const routes: Routes = [
  {path: '', component: SigninComponent }
]

@NgModule({
  declarations: [
    SigninComponent
],
  imports: [
    RouterModule.forChild(routes),
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbToastrModule,
    NbButtonModule,
    NbDialogModule,
    FormsModule
  ],
  exports: [RouterModule],

})

export class SigninModule {}
