import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  selector: 'recent-activity-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule, PIcon],
  template: `
    <span class="chart-title">Recent Activity</span>
    <div class="activity-list">
      @for (activity of activities; track activity.text) {
        <div class="activity-item">
          <svg
            [pIcon]="activity.icon"
            [ngClass]="['activity-icon', activity.color]"
          ></svg>
          <div class="activity-content">
            <span class="activity-text">{{ activity.text }}</span>
            <span class="activity-time">{{ activity.time }}</span>
          </div>
        </div>
      }
    </div>
  `,

  host: {
    class: 'layout-card col-item-2',
  },
})
export class RecentActivityWidget {
  
  activities = [
    {
      icon: 'shopping-cart',
      text: 'New order #1123',
      time: '2 minutes ago',
      color: 'pink',
    },
    {
      icon: 'user-plus',
      text: 'New customer registered',
      time: '15 minutes ago',
      color: 'green',
    },
    {
      icon: 'check-circle',
      text: 'Payment processed',
      time: '25 minutes ago',
      color: 'blue',
    },
    {
      icon: 'inbox',
      text: 'Inventory updated',
      time: '40 minutes ago',
      color: 'yellow',
    },
  ];
}
