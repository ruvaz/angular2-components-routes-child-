import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano+'px;'}">
      [ngStyle]="'font-size': tamano+'px;'" <br>
      Hola mundo esta es una etiqueta p en html - font-size: {{tamano}}px;
    </p>

    <p [style.fontSize.px]="tamano">
      Hola mundo.  [style.fontSize.px]="tamano"
    </p>

    <button class="btn btn-primary" (click)="tamano=tamano+5">
      <i class="fa fa-2x fa-plus"></i>
    </button>

    <button class="btn btn-danger" (click)="tamano=tamano-5">
      <i class="fa fa-2x fa-minus "></i>
    </button>


  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 30;

  constructor() {
  }

  ngOnInit(): void {
  }

}
