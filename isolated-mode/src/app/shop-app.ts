import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { palette, updatePrimaryPalette } from '@primeuix/themes';
import { Button } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { Tag } from 'primeng/tag';

interface Season {
    label: string;
    color: string;
}

@Component({
    selector: 'shop-app',
    imports: [FormsModule, Button, SelectButton, Tag],
    templateUrl: './shop-app.html'
})
export class ShopApp {
    protected readonly coffees = [
        { name: 'House Espresso', notes: 'Chocolate, hazelnut, brown sugar', price: 21, roast: 'Medium dark' },
        { name: 'Colombia Huila', notes: 'Caramel, red apple, cocoa', price: 24, roast: 'Medium' },
        { name: 'Ethiopia Guji', notes: 'Blueberry, jasmine, lemon', price: 27, roast: 'Light' },
        { name: 'Guatemala Huehue', notes: 'Toffee, orange, almond', price: 23, roast: 'Medium' }
    ];

    protected readonly seasons: Season[] = [
        { label: 'Autumn', color: '#c2410c' },
        { label: 'Evergreen', color: '#10b981' },
        { label: 'Winter', color: '#0284c7' }
    ];

    protected season = this.seasons[1];
    protected readonly cart = signal(0);

    protected addToCart() {
        this.cart.update((count) => count + 1);
    }

    protected changeSeason(value: Season) {
        if (value) updatePrimaryPalette(palette(value.color));
    }
}
