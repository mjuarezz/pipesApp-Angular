import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  siempreMayusculas : boolean = true;
  ordenarPor: string = '';

  heroes : Heroe [] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela:  false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela:  false,
      color: Color.verde
    },
    {
      nombre: 'Deredevil',
      vuela:  false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela:  true,
      color: Color.verde
    }

  ];

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }


  cambiar() {
    this.siempreMayusculas = !this.siempreMayusculas;
  }

}
