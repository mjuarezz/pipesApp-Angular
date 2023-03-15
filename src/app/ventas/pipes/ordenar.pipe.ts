import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[],ordenarPor:string = ''): Heroe[] {
    // if(ordenarPor === '') {
    //   return value;
    // }
    // else {
    //   value = value.sort((a,b) => (a.nombre > b.nombre?1:-1));
    //   return value;
    // }
    switch(ordenarPor) { 
      case '': { 
        return value;
        break; 
      } 
      case 'nombre': { 
        value = value.sort((a,b) => (a.nombre > b.nombre?1:-1));
        return value; 
        break; 
      }
      case 'vuela': { 
        value = value.sort((a,b) => (a.vuela > b.vuela?1:-1));
        return value; 
        break; 
      }
      case 'color': { 
        value = value.sort((a,b) => (a.color > b.color?1:-1));
        return value; 
        break; 
      }
      default: { 
        return value;
      } 
   }     

  }

}
