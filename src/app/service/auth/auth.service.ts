import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.apiUrl+'/api/'; // URL del backend

  constructor() {}

  // Método de login
  async login(data:any) {
    console.log(this.API_URL)
    try {
      const response = await axios.post(`${this.API_URL}login`,data);
 
      const { accessToken, user } = response.data;

      // Guardar el token en el localStorage o sessionStorage
      if (data.rememberMe) {
        localStorage.setItem('token', accessToken); // Token persistente
        localStorage.setItem('user', JSON.stringify(user)); // Datos del usuario persistentes
      } else {
        sessionStorage.setItem('token', accessToken); // Token temporal
        sessionStorage.setItem('user', JSON.stringify(user)); // Datos del usuario temporales
      }

      return user; // Retornar los datos del usuario
    } catch (error) {
      throw new Error('Login failed: ' + error);
    }
  }

  // Método de logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }



  // Comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token') || !!sessionStorage.getItem('token');
  }
}
