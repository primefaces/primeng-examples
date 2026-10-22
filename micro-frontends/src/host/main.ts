import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { Shell } from './shell';

bootstrapApplication(Shell, {
    providers: [provideZonelessChangeDetection(), providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })]
}).catch((err) => console.error(err));
