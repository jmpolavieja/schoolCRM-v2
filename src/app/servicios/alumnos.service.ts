import { Service } from '@angular/core';

@Service()
export class AlumnosService {
  // Propiedades del servicio
  private listaAlumnos: any[] = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 20,
      curso: 'Matemáticas'
    },
    {
      nombre: 'María',
      apellido: 'Gómez',
      edad: "veinte",
      curso: 'Historia'
    },
    {
      name: 'Carlos',
      age: 21,
      course: 'Física'
    }
  ];


  // Métodos del servicio
  getListaAlumnos() {
    return this.listaAlumnos;
  }

  addAlumno(alumno: any) {
    this.listaAlumnos.push(alumno);
  }

  removeAlumno(index: number) {
    this.listaAlumnos.splice(index, 1);
  }
}
