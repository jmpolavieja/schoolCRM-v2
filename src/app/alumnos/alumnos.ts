import { CardAlumno } from './../card-alumno/card-alumno';
import { Component, inject } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';


@Component({
  imports: [CardAlumno],
  selector: 'app-alumnos',
  styleUrl: './alumnos.css',
  templateUrl: './alumnos.html',
})
export class Alumnos {
  // Injectar el servicio de alumnos
  alumnosService = inject(AlumnosService);

  constructor() {
    console.log('Lista de alumnos: ', this.alumnosService.getListaAlumnos());
  }
}
