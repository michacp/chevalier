import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrl: './custom-chart.component.css'
})
export class CustomChartComponent {
  @Input() data: { x: string; y: number }[] = []; // Datos del gráfico
  @Input() type: 'line' | 'bar' | 'area' = 'line'; // Tipo de gráfico
  @Input() title: string = 'Gráfico dinámico'; // Título del gráfico
  @Input() seriesName: string = 'Valores'; // Nombre de la serie
 
  chartSeries: ApexAxisChartSeries = [];
  chartDetails: ApexChart = {
    type: this.type,
    height: 350
  };
  xAxis: ApexXAxis = {
    categories: []
  };
  dataLabels: ApexDataLabels = {
    enabled: true
  };
  chartTitle: ApexTitleSubtitle = {
    text: this.title,
    align: 'center'
  };

  ngOnInit(): void {
    
 console.log(this.data)
      this.updateChart();
 
  }

  updateChart(): void {
    this.chartSeries = [
      {
        name: this.seriesName,
        data: this.data.map(point => point.y)
      }
    ];
    this.chartDetails = {
      ...this.chartDetails,
      type: this.type
    };
    this.xAxis = {
      categories: this.data.map(point => point.x)
    };
    this.chartTitle = {
      text: this.title,
      align: 'center'
    };
  }
}
