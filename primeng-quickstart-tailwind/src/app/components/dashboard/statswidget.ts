import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  selector: 'stats-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule, PIcon],
  template: `
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  @for (stat of stats; track stat.title) {
  <div
    class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
  >
    <div class="flex items-start gap-2 justify-between">
      <span class="text-xl font-light leading-tight">
        {{ stat.title }}
      </span>
      <span
        class="shrink-0 bg-primary-100 dark:bg-primary-400/20 text-primary rounded-lg w-8 h-8 flex items-center justify-center border border-primary-200 dark:border-primary-400/40"
      >
        <svg [pIcon]="stat.icon" class="text-xl! leading-none!"></svg>
      </span>
    </div>
    <div class="flex flex-col gap-1 w-full">
      <div class="text-3xl font-medium leading-tight">
        {{ stat.value }}
      </div>
      <div class="text-surface-600 dark:text-surface-400 text-sm leading-tight">
        {{ stat.subtitle }}
      </div>
    </div>
  </div>
  }
</div>
  `,
})
export class StatsWidget {

    stats = [
        {
            title: "Total Orders",
            icon: "shopping-cart",
            value: "1,234",
            subtitle: "Last 7 days",
        },
        {
            title: "Active Users",
            icon: "users",
            value: "2,573",
            subtitle: "Last 7 days",
        },
        {
            title: "Revenue",
            icon: "dollar",
            value: "$45,200",
            subtitle: "Last 7 days",
        },
        {
            title: "Success Rate",
            icon: "chart-line",
            value: "95%",
            subtitle: "Last 7 days",
        },
    ];

}
