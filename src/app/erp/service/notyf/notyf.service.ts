import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Importar los estilos de Notyf
@Injectable({
  providedIn: 'root'
})
export class NotyfService {
  private notyf = new Notyf({
    duration: 5000, // Duración en milisegundos
    position: { x: 'right', y: 'top' }, // Posición de la notificación
    dismissible: true, // Permitir cerrar las notificaciones
    types: [
      {
        type: 'success',
        background: 'rgba(40, 167, 69, 0.5)', // Verde de éxito con 50% de transparencia
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'check_circle', // Icono para éxito
          color: 'rgba(255, 255, 255, 0.8)' // Blanco con 80% de transparencia para el icono
        },
      },
      {
        type: 'error',
        background: 'rgba(220, 53, 69, 0.5)', // Rojo de error con 50% de transparencia
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'error', // Icono para error
          color: 'rgba(255, 255, 255, 0.8)' // Blanco con 80% de transparencia para el icono
        },
      },
    ],
  });

  success(message: string) {
    this.notyf.success(message);
  }

  error(message: string) {
    this.notyf.error(message);
  }
}
