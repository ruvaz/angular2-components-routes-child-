import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta: string = 'alert-danger';

  // uso de objetos
  // tslint:disable-next-line:ban-types
  public propiedades: Object = {
    danger: false
  };
  public loading: boolean;


  constructor() {
  }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false,3000 ); // 3 segs
  }
}
