import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput: string = '';
  apellidoInput: string = '';
  //@ViewChild('nombreInput') nombre: ElementRef | undefined;
  //@ViewChild('apellidoInput') apellido: ElementRef | undefined;

  constructor(
    private logginService: LoggingService,
    private personasService: PersonasService
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }
  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    /* this.logginService.enviaMensajeAConsola(
      'Enviamos persona con nombre: ' +
        persona1.nombre +
        'apellido ' +
        persona1.apellido
    ); */
    this.personasService.agregarPersona(persona1);
  }
}
