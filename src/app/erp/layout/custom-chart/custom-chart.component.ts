import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';

interface ChartData {
  name: string; // Nombre de la serie
  color?: string; // Color de la serie
  data: { x: string; y: number }[]; // Datos de la serie
}


@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrl: './custom-chart.component.css'
})
export class CustomChartComponent {
  @Input() series: ChartData[] = []; // Datos de las series
  @Input() type: 'line' | 'bar' | 'area' = 'line'; // Tipo de gráfico
  @Input() title: string = 'Gráfico dinámico'; // Título del gráfico

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
  legend: ApexLegend = {
    position: 'top', // Posición de la leyenda
    horizontalAlign: 'center'
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['series']) {
      this.updateChart();
    }
  }

  updateChart(): void {
    this.chartSeries = this.series.map(serie => ({
      name: serie.name,
      data: serie.data.map(point => point.y)
    }));
    this.xAxis = {
      categories: this.series[0]?.data.map(point => point.x) || []
    };
    this.chartDetails = {
      ...this.chartDetails,
      type: this.type
    };
    this.chartTitle = {
      text: this.title,
      align: 'center'
    };
  }
}
