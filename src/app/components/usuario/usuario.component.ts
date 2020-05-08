import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute) {

    // impresion de parametros que recibo en GET
    this.activatedRoute.params.subscribe(parametros => {
      console.log('Ruta Padre');
      console.log(parametros);
    });

  }

  ngOnInit(): void {
  }

}
