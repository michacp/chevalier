import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  filtros = {
    fechaHoraInicio: '',
    fechaHoraFin: '',
    tipoReporte: 'Diario',
    barbero: 'todos'
  };

  barberos = [
    { nombre: 'Juan Perez', id: '1' },
    { nombre: 'Carlos García', id: '2' },
    { nombre: 'Ana López', id: '3' },
    { nombre: 'María Sánchez', id: '4' }
  ];

  constructor() {}

  ngOnInit(): void {}

  aplicarFiltros() {
    const consultaFiltros = {
      fechaInicio: this.filtros.fechaHoraInicio,
      fechaFin: this.filtros.fechaHoraFin,
      tipoReporte: this.filtros.tipoReporte,
      barbero: this.filtros.barbero
    };

    console.log('JSON enviado al backend:', consultaFiltros);
  }
}
