import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:4000/api/auth/'; // URL del backend

  constructor() {}

  // Método de login
  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${this.API_URL}login`, {
        username,
        password
      });

      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      throw new Error('Login failed: ' + error);
    }
  }

  // Método de logout
  logout() {
    localStorage.removeItem('user');
  }

  // Obtener el token JWT del localStorage
  getToken(): string | null {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user?.accessToken || null;
  }

  // Comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return !!user && !!user.accessToken;
  }
}
