import { APP_ID, createComponent } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import Lara from '@primeuix/themes/lara';
import { providePrimeNG } from 'primeng/config';
import { withIsolation } from 'primeng/isolation';
import { OrdersApp } from './orders-app';

export async function mountOrders(container: HTMLElement) {
    const app = await createApplication({
        providers: [
            { provide: APP_ID, useValue: 'orders' },
            providePrimeNG({ theme: { preset: Lara, options: { darkModeSelector: '.app-dark' } } }, withIsolation({ key: 'orders' }))
        ]
    });

    const element = document.createElement('orders-root');

    container.append(element);

    const component = createComponent(OrdersApp, { environmentInjector: app.injector, hostElement: element });

    app.attachView(component.hostView);

    return () => app.destroy();
}
