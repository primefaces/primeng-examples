import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'sales-trend-widget',
  standalone: true,
  imports: [CommonModule, ChartModule],
  template: `
    <div class="chart-header">
      <span class="chart-title">Sales Trend</span>
    </div>
    <div class="chart-content">
      <p-chart
        type="bar"
        height="300px"
        [data]="chartData"
        [options]="chartOptions"
      />
    </div>
  `,
  host: {
    class: 'layout-card col-item-2',
  },
})
export class SalesTrendWidget {
  layoutService = inject(LayoutService);

  platformId = inject(PLATFORM_ID);

  chartData: any;

  chartOptions: any;

  selectedRevenueMonth: any = { name: 'January - July 2021', code: '0' };

  revenueMonth: any = [
    { name: 'January - July 2021', code: '0' },
    { name: 'August - December 2020', code: '1' },
  ];

  private chartThemeRaf: any;

  constructor(private cd: ChangeDetectorRef) {}

  themeEffect = effect(() => {
    this.layoutService.appState();

    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.chartThemeRaf);
      this.chartThemeRaf = requestAnimationFrame(() =>
        requestAnimationFrame(() => this.initChart())
      );
    }
  });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const style = getComputedStyle(document.documentElement);

    this.chartData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          type: 'bar',
          label: 'Subscriptions',
          backgroundColor: style.getPropertyValue('--p-primary-400'),
          data: [4000, 10000, 15000, 4000],
          barThickness: 32,
        },
        {
          type: 'bar',
          label: 'Advertising',
          backgroundColor: style.getPropertyValue('--p-primary-300'),
          data: [2100, 8400, 2400, 7500],
          barThickness: 32,
        },
        {
          type: 'bar',
          label: 'Affiliate',
          backgroundColor: style.getPropertyValue('--p-primary-200'),
          data: [4100, 5200, 3400, 7400],
          borderRadius: {
            topLeft: 8,
            topRight: 8,
          },
          barThickness: 32,
        },
      ],
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            color: 'transparent',
            borderColor: 'transparent',
          },
        },
        y: {
          stacked: true,
          grid: {
            color: 'transparent',
            borderColor: 'transparent',
            drawTicks: false,
          },
        },
      },
    };

    this.cd.markForCheck();
  }

  changeRevenueChart(event: any) {
    const dataSet1 = [
      [37, 34, 21, 27, 10, 18, 15],
      [31, 27, 30, 37, 23, 29, 20],
      [21, 7, 13, 3, 19, 11, 6],
      [47, 31, 35, 20, 46, 39, 25],
    ];
    const dataSet2 = [
      [31, 27, 30, 37, 23, 29, 20],
      [47, 31, 35, 20, 46, 39, 25],
      [37, 34, 21, 27, 10, 18, 15],
      [21, 7, 13, 3, 19, 11, 6],
    ];

    if (event.value.code === '1') {
      this.chartData.datasets[0].data = dataSet2[parseInt('0')];
      this.chartData.datasets[1].data = dataSet2[parseInt('1')];
      this.chartData.datasets[2].data = dataSet2[parseInt('2')];
      this.chartData.datasets[3].data = dataSet2[parseInt('3')];
    } else {
      this.chartData.datasets[0].data = dataSet1[parseInt('0')];
      this.chartData.datasets[1].data = dataSet1[parseInt('1')];
      this.chartData.datasets[2].data = dataSet1[parseInt('2')];
      this.chartData.datasets[3].data = dataSet1[parseInt('3')];
    }
  }
}
