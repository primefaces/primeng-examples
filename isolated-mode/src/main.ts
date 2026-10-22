import { APP_ID, createComponent, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import { providePrimeNG } from 'primeng/config';
import { withIsolation } from 'primeng/isolation';
import { ShopApp } from './app/shop-app';
import { StaffPanel } from './app/staff-panel';

await bootstrapApplication(ShopApp, {
    providers: [provideZonelessChangeDetection(), providePrimeNG({ theme: { preset: Aura } })]
});

const StaffPreset = definePreset(Lara, {
    semantic: { primary: { 50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}', 300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}', 600: '{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}', 900: '{indigo.900}', 950: '{indigo.950}' } }
});

const staff = await createApplication({
    providers: [
        provideZonelessChangeDetection(),
        { provide: APP_ID, useValue: 'staff' },
        providePrimeNG({ theme: { preset: StaffPreset } }, withIsolation({ key: 'staff' }))
    ]
});

const panel = createComponent(StaffPanel, {
    environmentInjector: staff.injector,
    hostElement: document.querySelector('#staff')!
});

staff.attachView(panel.hostView);
