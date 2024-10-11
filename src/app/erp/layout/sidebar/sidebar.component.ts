import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarMinimized = false; // Estado para controlar si la sidebar está minimizada
  user = JSON.parse(localStorage.getItem('user') || '{}'); // Obtener datos del usuario

  toggleSidebar() {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }
}
