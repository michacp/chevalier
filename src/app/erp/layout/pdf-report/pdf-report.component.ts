import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalesService } from '../../service/sales/sales.service';
@Component({
  selector: 'app-pdf-report',
  templateUrl: './pdf-report.component.html',
  styleUrl: './pdf-report.component.css'
})
export class PdfReportComponent {
  constructor(private salesservice: SalesService,
    public dialogRef: MatDialogRef<PdfReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  // Recibe los datos enviados 
  ) { }
  datos = {
    title: '',
    date: ''
  }
  ngOnInit(): void {
    this.datos = {
      title: this.data.nombrebarbero,
      date: this.data.fecha ? `${this.data.fecha.start} - ${this.data.fecha.end}` : "TODAS"
    }
    delete this.data.nombrebarbero;
  }



  // Función para el botón de Reporte Resumido
 async generarReporteResumido()  {
  const report=await   this.salesservice.Salesreportsminimal(this.data)
  console.log(report)
  }

  // Función para el botón de Reporte Detallado
  generarReporteDetallado(): void {
    console.log('Generando reporte detallado', this.data);
    // Aquí colocas la lógica para generar el reporte detallado
  }
}
