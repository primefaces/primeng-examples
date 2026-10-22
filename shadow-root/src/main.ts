import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ReorderForm } from './app/reorder-form';

bootstrapApplication(ReorderForm, appConfig).catch((err) => console.error(err));

const toggle = document.querySelector('.theme-toggle') as HTMLButtonElement;

toggle.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('app-dark');

    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
});
