import { SigninComponent } from './components/signin/signin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbToastrModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeBankComponent } from './components/home-bank/home-bank.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';



registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeBankComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbCardModule,
    NbToastrModule.forRoot(),
    NbButtonModule,
    NbDialogModule.forChild(),

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR',}],
  bootstrap: [AppComponent],

})
export class AppModule { }
