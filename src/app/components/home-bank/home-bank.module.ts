import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbToastrModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { HomeBankComponent } from  './home-bank.component'
import { registerLocaleData, CommonModule } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

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
    CommonModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR',}],
  exports: [RouterModule],
})

export class HomebankModule{}
