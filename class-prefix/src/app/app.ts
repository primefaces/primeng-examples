import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputText } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { Select } from 'primeng/select';

@Component({
    selector: 'app-root',
    imports: [FormsModule, Button, Checkbox, InputText, Message, Select],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly cities = ['Portland', 'Beaverton', 'Gresham', 'Vancouver', 'Salem'];

    protected readonly name = signal('');
    protected readonly email = signal('');
    protected readonly city = signal<string | null>(null);
    protected readonly delivery = signal(true);
    protected readonly sent = signal(false);
}
