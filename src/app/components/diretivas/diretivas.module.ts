import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CpfDirective } from './cpf.directive'

@NgModule({
  declarations: [
    CpfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CpfDirective
  ]
})

export class DiretivasModule { }
