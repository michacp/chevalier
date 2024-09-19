import { Component } from '@angular/core';

@Component({
  selector: 'app-tiktok-carrucel',
  templateUrl: './tiktok-carrucel.component.html',
  styleUrl: './tiktok-carrucel.component.css'
})
export class TiktokCarrucelComponent {
  videoIds = [
    '7413046223613021445',
    '7415754319548402950',
    '7415672898523794694',
    '7413545218471120134',
    '7413046242881588485',
    '7410968882778934533'
  ];

  showVideo: boolean[] = [];
  activeIndex = 0; // Control del índice activo para la barra de puntos

  constructor() {
    // Inicialmente, solo el primer video está visible
    this.showVideo = this.videoIds.map((_, index) => index === 0);
  }

  // Método para detectar el cambio de diapositiva
  onSlideChange(event: any) {
    const activeIndex = event.to; // Obtiene el índice de la diapositiva activa
    this.activeIndex = activeIndex;
    this.resetVideos();
    
    // Reabre el componente del video actual
    setTimeout(() => {
      this.showVideo[activeIndex] = true;
    }, 0); // Retraso pequeño para asegurar el reinicio
  }

 
  // Reinicia todos los componentes de video
  resetVideos() {
    this.showVideo = this.videoIds.map(() => false);
  }
}
