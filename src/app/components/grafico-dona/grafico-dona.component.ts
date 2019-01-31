import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  @Input('Labels') doughnutChartLabels: string[] = [];
  @Input('Data') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
