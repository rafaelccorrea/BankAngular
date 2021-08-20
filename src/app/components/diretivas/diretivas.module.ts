import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CpfDirective } from './cpf.directive'
import { CellphoneDirective } from './cellphone.directive'

@NgModule({
  declarations: [
    CpfDirective,
    CellphoneDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CpfDirective,
    CellphoneDirective
  ]
})

export class DiretivasModule { }
