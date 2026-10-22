import { Component, ViewEncapsulation, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Toast } from 'primeng/toast';

type Status = 'Roasting' | 'Shipped' | 'Delivered';

interface Order {
    id: number;
    cafe: string;
    coffee: string;
    bags: number;
    status: Status;
}

interface Draft {
    cafe: string | null;
    coffee: string | null;
    bags: number;
}

@Component({
    selector: 'orders-root',
    encapsulation: ViewEncapsulation.ShadowDom,
    imports: [FormsModule, Button, Dialog, InputNumber, Select, TableModule, Tag, Toast],
    providers: [MessageService],
    templateUrl: './orders-app.html',
    styleUrl: './orders-app.css'
})
export class OrdersApp {
    private readonly messages = inject(MessageService);

    protected readonly cafes = ['Little Owl Café', 'Second Street Bakery', 'Harbor Books', 'The Corner Spot'];
    protected readonly coffees = ['House Espresso', 'Colombia Huila', 'Ethiopia Guji', 'Guatemala Huehue'];

    protected readonly orders = signal<Order[]>([
        { id: 1048, cafe: 'Little Owl Café', coffee: 'House Espresso', bags: 12, status: 'Roasting' },
        { id: 1047, cafe: 'Harbor Books', coffee: 'Ethiopia Guji', bags: 4, status: 'Shipped' },
        { id: 1046, cafe: 'Second Street Bakery', coffee: 'Colombia Huila', bags: 8, status: 'Shipped' },
        { id: 1045, cafe: 'The Corner Spot', coffee: 'House Espresso', bags: 20, status: 'Delivered' },
        { id: 1044, cafe: 'Little Owl Café', coffee: 'Guatemala Huehue', bags: 6, status: 'Delivered' }
    ]);

    protected readonly severities: Record<string, 'warn' | 'info' | 'success'> = { Roasting: 'warn', Shipped: 'info', Delivered: 'success' };

    protected readonly visible = signal(false);
    protected draft: Draft = { cafe: null, coffee: null, bags: 6 };

    protected openNew() {
        this.draft = { cafe: null, coffee: null, bags: 6 };
        this.visible.set(true);
    }

    protected save() {
        const { cafe, coffee, bags } = this.draft;

        if (!cafe || !coffee) return;

        const id = this.orders()[0].id + 1;

        this.orders.update((orders) => [{ id, cafe, coffee, bags, status: 'Roasting' }, ...orders]);
        this.visible.set(false);
        this.messages.add({ severity: 'success', summary: `Order #${id} saved`, detail: `${bags} bags for ${cafe}`, life: 3000 });
    }
}
