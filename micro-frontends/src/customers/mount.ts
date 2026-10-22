import { APP_ID, createComponent } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import Nora from '@primeuix/themes/nora';
import { providePrimeNG } from 'primeng/config';
import { withIsolation } from 'primeng/isolation';
import { CustomersApp } from './customers-app';

export async function mountCustomers(container: HTMLElement) {
    const app = await createApplication({
        providers: [
            { provide: APP_ID, useValue: 'customers' },
            providePrimeNG({ theme: { preset: Nora, options: { darkModeSelector: '.app-dark' } } }, withIsolation({ key: 'customers' }))
        ]
    });

    const element = document.createElement('customers-root');

    container.append(element);

    const component = createComponent(CustomersApp, { environmentInjector: app.injector, hostElement: element });

    app.attachView(component.hostView);

    return () => app.destroy();
}
