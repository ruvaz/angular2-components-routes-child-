import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada');
    el.nativeElement.style.backgroundColor = 'red';
  }

  @Input('appResaltado') nuevoColor: string;

  // que es lo que quiero que este escuchando
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'green');
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
