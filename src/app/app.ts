import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menus/menu.component/menu.component';
import { Alumnos } from './alumnos/alumnos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, Alumnos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CRM School v2');
  // Pedir al servicio de alumnos la lista de alumnos
  contador = signal(0);

  constructor() {
    this.contador.set(5);
    console.log('Signal contador vale: ', this.contador());
    this.contador.update((value) => value + 1);
    console.log('Signal contador vale: ', this.contador());
  }
}
