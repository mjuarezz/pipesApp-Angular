import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower : string = 'Juan Perez';
  nombreUpper : string ='JUAN PEREZ';
  nombreCompleto: string = 'Juan Perez Reyes'; 

  fecha: Date = new Date(); // el dia de hoy

}
