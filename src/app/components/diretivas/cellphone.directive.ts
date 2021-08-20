import { CellphoneService } from './cellphone.service';
import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: '[phoneForm]'
})

export class CellphoneDirective {

    constructor(
      private renderer: Renderer2,
      private el: ElementRef,
      private PhoneService: CellphoneService
    ) {}

    @HostListener("input", ["$event"]) onInput(event) {
      if (event.target.value.length <= 11) {
        this.renderer.setProperty(
          this.el.nativeElement,
          "value",
          this.PhoneService.convertToCellphone(event.target.value)
        );
      }
    }
  }
