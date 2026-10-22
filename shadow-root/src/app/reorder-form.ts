import { Component, ViewEncapsulation, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';
import { Message } from 'primeng/message';
import { Select } from 'primeng/select';

interface Coffee {
    name: string;
    origin: string;
    price: number;
}

const today = new Date();
const firstDelivery = new Date(today.getFullYear(), today.getMonth(), today.getDate() + ((11 - today.getDay()) % 7 || 7));

@Component({
    selector: 'reorder-form',
    encapsulation: ViewEncapsulation.ShadowDom,
    imports: [FormsModule, Button, DatePicker, InputNumber, Message, Select],
    templateUrl: './reorder-form.html',
    styleUrl: './reorder-form.css'
})
export class ReorderForm {
    protected readonly coffees: Coffee[] = [
        { name: 'House Espresso', origin: 'Brazil and Ethiopia', price: 21 },
        { name: 'Colombia Huila', origin: 'Washed, caramel and red apple', price: 24 },
        { name: 'Ethiopia Guji', origin: 'Natural, blueberry and jasmine', price: 27 }
    ];

    protected readonly firstDelivery = firstDelivery;

    protected readonly coffee = signal<Coffee | null>(this.coffees[0]);
    protected readonly bags = signal(6);
    protected readonly delivery = signal<Date | null>(firstDelivery);
    protected readonly placed = signal(false);

    protected readonly total = computed(() => (this.coffee()?.price ?? 0) * this.bags());
    protected readonly deliveryText = computed(() => this.delivery()?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
}
