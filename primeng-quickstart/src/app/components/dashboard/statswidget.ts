import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  selector: 'stats-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule, PIcon],
  template: `
    <div *ngFor="let stat of stats; let i = index" class="layout-card">
      <div class="stats-header">
        <span class="stats-title">
          {{ stat.title }}
        </span>
        <span class="stats-icon-box">
          <svg [pIcon]="stat.icon"></svg>
        </span>
      </div>
      <div class="stats-content">
        <div class="stats-value">
          {{ stat.value }}
        </div>
        <div class="stats-subtitle">
          {{ stat.subtitle }}
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'stats',
  },
})
export class StatsWidget {
  
  stats = [
    {
      title: 'Total Orders',
      icon: 'shopping-cart',
      value: '1,234',
      subtitle: 'Last 7 days',
    },
    {
      title: 'Active Users',
      icon: 'users',
      value: '2,573',
      subtitle: 'Last 7 days',
    },
    {
      title: 'Revenue',
      icon: 'dollar',
      value: '$45,200',
      subtitle: 'Last 7 days',
    },
    {
      title: 'Success Rate',
      icon: 'chart-line',
      value: '95%',
      subtitle: 'Last 7 days',
    },
  ];
}
