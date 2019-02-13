import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titulo: any = 'hola mundo';
  datos: any = {Nombre: 'Diego', Apellido: 'Herrera', Edad: 18, Documento: 20023882};


  eventButton() {
    console.log('ejecutado el evento ');
  }

}
