import { NgModule } from '@angular/core';
import { CreateAccountComponent } from '../../components/create-account/create-account.component';

const routes: Routes = [
  {path: 'create', component: CreateAccountComponent },
  {path: 'update/:id', component: CreateAccountComponent }
]

@NgModule({
  declarations: [
    CreateAccountComponent,
  ],
  imports: [

  ]
})

  export class AppRoutingModule { }
