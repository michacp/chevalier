import { Component, AfterViewInit, ViewChild, ElementRef   } from '@angular/core'; 
import { SalesService } from '../../service/sales/sales.service';  
import { AuthService } from '../../../service/auth/auth.service';
interface Grafico {
  x: string;
  y: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private semanasales: Grafico[] = [];
  private semanaanterior: Grafico[] = [];
  isDataLoaded: boolean = false; // Variable para controlar la carga de datos

  constructor(private authService: AuthService, private salesService: SalesService) {}

  ngOnInit(): void {
    if (this.hasRole(['ADMIN', 'SUPERVISOR'])) {
      this.getdata();
    }
  }

  hasRole(roles: string[]): boolean {
    return this.authService.hasRole(roles);
  }

  async getdata() {
    try {
      const response = await this.salesService.Salesgetdatagraph();
      this.semanasales = response.thisWeek;
      this.semanaanterior = response.lastWeek;
      this.isDataLoaded = true; // Marca los datos como cargados
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  // Métodos getter para proporcionar los datos actualizados
  getSemanaSalesData(): Grafico[] {
    return this.semanasales.length > 0 ? this.semanasales : [{ x: 'Sin datos', y: 0 }];
  }

  getSemanaAnteriorData(): Grafico[] {
    return this.semanaanterior.length > 0 ? this.semanaanterior : [{ x: 'Sin datos', y: 0 }];
  }
}



 
