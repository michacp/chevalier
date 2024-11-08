import { Injectable } from '@angular/core';  
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
 
@Injectable({
  providedIn: 'root'
})
export class NotyfService {
  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    const config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'] // Clase CSS personalizada para éxito
    };
    this.snackBar.open(message, 'Cerrar', config);
  }

  error(message: string) {
    const config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'] // Clase CSS personalizada para error
    };
    this.snackBar.open(message, 'Cerrar', config);
  }
 
}
