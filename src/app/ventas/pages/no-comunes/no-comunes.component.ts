import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // Propiedades empleadas en i18nSelect
  nombre : string = 'Jose';
  genero : string = 'H';

  invitacionMapa = {
    'H' : 'invitarlo',
    'M' : 'invitarla'
  }

  // Propiedades empleadas en i18nPlural
  clientes: string[] = ['Maria','Juan','Jose','Lula','Pedro','Tomas','Roberto'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if(this.genero === 'M') {
      this.nombre = 'Jose';
      this.genero = 'H';    
    }
    else {
      this.nombre = 'Susana';
      this.genero = 'M'
    }
  }

  eliminarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Susana',
    edad: 34,
    direccion: 'Queretaro, Mexico'
  }

  // Json Pipe 

  // Async Pipe
  miObservable = interval(1000) // 0,1,2,3

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  });


}
