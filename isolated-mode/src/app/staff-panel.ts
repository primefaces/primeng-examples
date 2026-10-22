import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getActionsInstance } from '@primeuix/styled';
import { palette } from '@primeuix/themes';
import { Button } from 'primeng/button';
import { injectIsolation } from 'primeng/config';
import { Dialog } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { SelectButton } from 'primeng/selectbutton';
import { ToggleSwitch } from 'primeng/toggleswitch';

interface StockItem {
    name: string;
    bags: number;
    visible: boolean;
}

interface PanelColor {
    label: string;
    color: string;
}

@Component({
    selector: 'staff-panel',
    imports: [FormsModule, Button, Dialog, InputNumber, SelectButton, ToggleSwitch],
    templateUrl: './staff-panel.html'
})
export class StaffPanel {
    private readonly isolation = injectIsolation();

    protected readonly stock: StockItem[] = [
        { name: 'House Espresso', bags: 42, visible: true },
        { name: 'Colombia Huila', bags: 18, visible: true },
        { name: 'Ethiopia Guji', bags: 3, visible: true },
        { name: 'Guatemala Huehue', bags: 0, visible: false }
    ];

    protected readonly colors: PanelColor[] = [
        { label: 'Indigo', color: '#6366f1' },
        { label: 'Rose', color: '#e11d48' }
    ];

    protected panelColor = this.colors[0];
    protected readonly soldOut = signal<StockItem | null>(null);

    protected markSoldOut() {
        const item = this.soldOut();

        if (item) {
            item.bags = 0;
            item.visible = false;
        }

        this.soldOut.set(null);
    }

    protected changePanelColor(value: PanelColor) {
        if (value && this.isolation) getActionsInstance(this.isolation.theme).updatePrimaryPalette(palette(value.color));
    }
}
