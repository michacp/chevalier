import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  constructor(private router: Router) {}

  logout() {
    // Borrar la sesión
    localStorage.removeItem('userToken');
    // Redireccionar al login
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    // Emitir un evento para minimizar o maximizar la sidebar
  }
}
