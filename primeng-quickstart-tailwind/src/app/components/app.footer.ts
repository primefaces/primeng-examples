import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Twitter } from '@primeicons/angular/twitter';
import { Globe } from '@primeicons/angular/globe';
import { Github } from '@primeicons/angular/github';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, Twitter, Globe, Github],
  template: `
     <div
        class="bg-surface-0 dark:bg-surface-900 p-6 rounded-2xl max-w-7xl mx-auto border border-surface-200 dark:border-surface-700 w-full"
    >
        <div class="flex justify-between items-center sm:flex-row flex-col gap-2">
            <div class="text-sm text-surface-600 dark:text-surface-400">202X PrimeNG.</div>
            <div class="flex gap-4">
                <a
                    href="https://twitter.com/prime_ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-surface-600 dark:text-surface-400 hover:text-primary transition-colors text-sm"
                >
                    <svg data-p-icon="twitter" class="text-xl"></svg>
                </a>
                <a
                    href="https://primeng.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-surface-600 dark:text-surface-400 hover:text-primary transition-colors text-sm"
                >
                    <svg data-p-icon="globe" class="text-xl"></svg>
                </a>
                <a
                    href="https://github.com/primefaces/primeng"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-surface-600 dark:text-surface-400 hover:text-primary transition-colors text-sm"
                >
                    <svg data-p-icon="github" class="text-xl"></svg>
                </a>
            </div>
        </div>
    </div>
  `,
})
export class AppFooter {

}
