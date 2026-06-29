import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfig } from './app.config';
import { LayoutService } from '../service/layout.service';
import { CommonModule } from '@angular/common';
import { PIcon } from '@primeicons/angular/p-icon';
import { Cog } from '@primeicons/angular/cog';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule, AppConfig, PIcon, Cog],
  template: `
    <div
      class="bg-surface-0 dark:bg-surface-900 p-6 rounded-2xl max-w-7xl mx-auto border border-surface-200 dark:border-surface-700 w-full"
    >
      <div class="flex justify-between items-center">
        <div class="flex gap-3 items-center">
          <svg
            width="31"
            height="33"
            viewBox="0 0 31 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="block mx-auto w-10 h-10"
          >
            <path
              d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
              fill="var(--p-primary-color)"
            />
            <mask
              id="mask0_1_52"
              style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="31"
              height="33"
            >
              <path
                d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                [attr.fill]="
                  isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
                "
              />
            </mask>
            <g mask="url(#mask0_1_52)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                fill="var(--p-primary-color)"
              />
            </g>
            <path
              d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
            <path
              d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
              [attr.fill]="
                isDarkMode() ? 'var(--p-surface-950)' : 'var(--p-surface-50)'
              "
            />
          </svg>
          <span class="hidden sm:flex flex-col"
            ><span
              class="text-xl font-light text-surface-700 dark:text-surface-100 leading-none"
              >PrimeNG Examples</span
            >
            <span class="text-sm font-medium text-primary leading-tight"
              >Tailwindcss v4</span
            ></span
          >
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all text-surface-900 dark:text-surface-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950"
            (click)="toggleDarkMode()"
          >
            <svg [pIcon]="isDarkMode() ? 'moon' : 'sun'" class="text-base"></svg>
          </button>
          <div class="relative">
            <button
              pButton
              pStyleClass="@next"
              enterFromClass="hidden"
              enterActiveClass="animate-scalein"
              leaveToClass="hidden"
              leaveActiveClass="animate-fadeout"
              [hideOnOutsideClick]="true"
              text
              rounded
              aria-label="Settings"
            >
              <svg data-p-icon="cog"></svg>
            </button>
            <app-config class="hidden" />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppTopbar {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
