import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    // impresion de parametros que recibo en GET
    this.activatedRoute.parent.params.subscribe(parametros => {
      console.log('Ruta hija usuario nuevo');
      console.log(parametros);
    });

  }

  ngOnInit(): void {
  }

}
