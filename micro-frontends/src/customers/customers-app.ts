import { Component, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Toast } from 'primeng/toast';
import { ToggleSwitch } from 'primeng/toggleswitch';

interface Customer {
    name: string;
    contact: string;
    city: string;
    weekly: boolean;
    balance: number;
}

@Component({
    selector: 'customers-root',
    encapsulation: ViewEncapsulation.ShadowDom,
    imports: [FormsModule, Avatar, Button, IconField, InputIcon, InputText, Toast, ToggleSwitch],
    providers: [MessageService],
    templateUrl: './customers-app.html',
    styleUrl: './customers-app.css'
})
export class CustomersApp {
    private readonly messages = inject(MessageService);

    private readonly customers: Customer[] = [
        { name: 'Little Owl Café', contact: 'Maya Chen', city: 'Portland', weekly: true, balance: 412 },
        { name: 'Second Street Bakery', contact: 'Daniel Ortiz', city: 'Beaverton', weekly: true, balance: 0 },
        { name: 'Harbor Books', contact: 'Priya Nair', city: 'Astoria', weekly: false, balance: 108 },
        { name: 'The Corner Spot', contact: 'Sam Whitfield', city: 'Portland', weekly: true, balance: 840 }
    ];

    protected readonly query = signal('');

    protected readonly filtered = computed(() => this.customers.filter((customer) => `${customer.name} ${customer.contact} ${customer.city}`.toLowerCase().includes(this.query().toLowerCase())));

    protected initials(name: string) {
        return name
            .split(' ')
            .slice(0, 2)
            .map((word) => word[0])
            .join('');
    }

    protected sendInvoice(customer: Customer) {
        this.messages.add({ severity: 'info', summary: 'Invoice sent', detail: `$${customer.balance} to ${customer.contact}`, life: 3000 });
    }
}
