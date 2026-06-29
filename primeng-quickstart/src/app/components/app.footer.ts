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
    <div class="footer-container">
      <div class="footer-copyright">202X PrimeNG.</div>
      <div class="footer-links">
        <a
          href="https://twitter.com/prime_ng"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <svg data-p-icon="twitter" class="footer-icon"></svg>
        </a>
        <a
          href="https://primeng.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <svg data-p-icon="globe" class="footer-icon"></svg>
        </a>
        <a
          href="https://github.com/primefaces/primeng"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <svg data-p-icon="github" class="footer-icon"></svg>
        </a>
      </div>
    </div>
  `,
  host: {
    class: 'footer',
  },
})
export class AppFooter {}
