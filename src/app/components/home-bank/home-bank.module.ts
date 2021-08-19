import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbToastrModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { HomeBankComponent } from  './home-bank.component'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localePt);

const routes: Routes = [
  {path: '', component: HomeBankComponent }
]

@NgModule({
  declarations: [
    HomeBankComponent
],
  imports: [
    RouterModule.forChild(routes),
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbToastrModule,
    NbButtonModule,
    NbDialogModule,
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR',}],
  exports: [RouterModule],
})

export class HomebankModule{}
