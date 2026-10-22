import { Component, ElementRef, afterNextRender, signal, viewChild } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-shell',
    imports: [Button],
    templateUrl: './shell.html'
})
export class Shell {
    protected readonly remotes = [
        { name: 'orders', label: 'Orders' },
        { name: 'customers', label: 'Customers' }
    ];

    protected readonly current = signal('orders');
    protected readonly dark = signal(false);

    private readonly outlet = viewChild.required<ElementRef<HTMLElement>>('outlet');
    private mounted = Promise.resolve(() => {});

    constructor() {
        afterNextRender(() => this.show('orders'));
    }

    protected async show(name: string) {
        this.current.set(name);

        await this.load(name);

        this.mounted = this.mounted.then(async (unmount) => {
            const mount = window.microFrontends?.[name];

            if (this.current() !== name || !mount) return unmount;

            unmount();

            return mount(this.outlet().nativeElement);
        });
    }

    protected toggleDark() {
        this.dark.set(document.documentElement.classList.toggle('app-dark'));
    }

    private load(name: string) {
        if (window.microFrontends?.[name]) return Promise.resolve();

        return new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');

            script.type = 'module';
            script.src = new URL(`mfe/${name}/main.js`, document.baseURI).href;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Could not load ${script.src}`));
            document.head.append(script);
        });
    }
}
