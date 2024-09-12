import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  teamMembers = [
    {
      name: 'Juan Pérez',
      specialty: 'Especialista en cortes modernos',
      bio: 'Con más de 10 años de experiencia en barbería, Juan es un experto en crear looks modernos y a la moda.',
      photo: 'assets/images/juan.jpg'
    },
    {
      name: 'Carlos Sánchez',
      specialty: 'Barbero experto en perfilado de barba',
      bio: 'Carlos se especializa en el perfilado de barbas y brinda un servicio de excelencia.',
      photo: 'assets/images/carlos.jpg'
    },
    {
      name: 'Ana González',
      specialty: 'Experta en tratamientos capilares',
      bio: 'Ana es conocida por su habilidad en tratamientos capilares y cuidado del cabello.',
      photo: 'assets/images/ana.jpg'
    }
  ]; 

}
