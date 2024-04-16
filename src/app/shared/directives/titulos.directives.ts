import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cambiarTamanoTitulo]'
})
export class CambiarTamanoTituloDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Cambia el tamaño del título a 20
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }
}