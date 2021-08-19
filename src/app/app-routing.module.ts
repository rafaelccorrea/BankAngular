import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: '/signin', loadChildren: () => import('./components/signin/signin.module').then( m => m.SigninModule)},
  {path: 'bank', loadChildren: () => import('./components/create-account/create-account.module').then( m => m.CreateAccountModule)},
  {path: 'bank', loadChildren: () => import('./components/create-account/create-account.module').then( m => m.CreateAccountModule)},
  {path: '/signup', loadChildren: () => import('./components/signup/signup.module').then( m => m.SignupModule)},
  {path: '/home', loadChildren:() => import('./components/home-bank/home-bank.module').then( m => m.HomebankModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
