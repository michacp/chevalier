import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  teamMembers = [
    {
      name: 'Ana González',
      specialty: 'Experta en tratamientos capilares',
      bio: 'Ana es conocida por su habilidad en tratamientos capilares y cuidado del cabello.',
      photo: 'img/team/1.jpg'
    },
    {
      name: 'Juan Pérez',
      specialty: 'Especialista en cortes modernos',
      bio: 'Con más de 10 años de experiencia en barbería, Juan es un experto en crear looks modernos y a la moda.',
      photo: 'img/team/2.jpg'
    },
    {
      name: 'Carlos Sánchez',
      specialty: 'Barbero experto en perfilado de barba',
      bio: 'Carlos se especializa en el perfilado de barbas y brinda un servicio de excelencia.',
      photo: 'img/team/3.jpg'
    },
    {
      name: 'Carlos Sánchez',
      specialty: 'Barbero experto en perfilado de barba',
      bio: 'Carlos se especializa en el perfilado de barbas y brinda un servicio de excelencia.',
      photo: 'img/team/4.jpg'
    }

  ]; 
  // Your API Key: ZoUukmpN3aUre63w5Pk2fPx5P7UIe/fNBqxxkW6EdopWqIVKjbOWPAqi1K36v5uSsZbtKuG6XpKZf4/OjfZAjardtOY=


}
