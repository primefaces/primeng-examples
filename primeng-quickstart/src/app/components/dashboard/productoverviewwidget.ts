import {
  ChangeDetectorRef,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { LayoutService } from '../../service/layout.service';

interface Product {
  name: string;
  category: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}
@Component({
  selector: 'product-overview-widget',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    TableModule,
    TagModule,
    RatingModule,
  ],
  template: `
    <div class="products-header">
      <span class="products-title">Products Overview</span>
      <p-iconfield class="search-field">
        <p-inputicon class="pi pi-search" />
        <input
          pInputText
          [(ngModel)]="searchQuery"
          placeholder="Search products..."
          class="products-search"
          (ngModelChange)="searchProducts()"
        />
      </p-iconfield>
    </div>
    <div class="products-table-container">
      <p-table
        [value]="filteredProducts"
        selectionMode="single"
        [(selection)]="selectedProduct"
        [loading]="loading"
        [rows]="5"
        styleClass="products-table"
        [ngClass]="{ 'p-dark': isDarkMode() }"
      >
        <ng-template #header>
          <tr>
            <th pSortableColumn="name">Name <p-sort-icon field="name" /></th>
            <th pSortableColumn="category">
              Category <p-sort-icon field="category" />
            </th>

            <th pSortableColumn="price">Price <p-sort-icon field="price" /></th>
            <th pSortableColumn="status">
              Status <p-sort-icon field="status" />
            </th>
          </tr>
        </ng-template>
        <ng-template #body let-product>
          <tr>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }}</td>
            <td>
              <p-tag
                [severity]="
                  product.status === 'In Stock'
                    ? 'success'
                    : product.status === 'Low Stock'
                    ? 'warn'
                    : 'danger'
                "
              >
                {{ product.status }}
              </p-tag>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  host: {
    class: 'layout-card',
  },
  styles: `
  :host ::ng-deep  {
    .p-datatable-mask {
      backdrop-filter: blur(4px) !important;
      background-color: color-mix(in srgb, var(--p-surface-0), transparent 80%) !important;
    }
    .p-dark .p-datatable-mask {
      background-color: color-mix(in srgb, var(--p-surface-900), transparent 80%) !important;
    }
  
    .p-datatable-loading-icon {
      color: var(--p-primary-500) !important;
    }
}

`,
})
export class ProductOverviewWidget {
  layoutService = inject(LayoutService);

  private cd = inject(ChangeDetectorRef);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  selectedProduct!: Product;

  products: Product[] = [
    {
      name: 'Laptop Pro',
      category: 'Electronics',
      price: 2499,
      status: 'In Stock',
    },
    {
      name: 'Wireless Mouse',
      category: 'Accessories',
      price: 49,
      status: 'Low Stock',
    },
    {
      name: 'Monitor 4K',
      category: 'Electronics',
      price: 699,
      status: 'Out of Stock',
    },
    {
      name: 'Keyboard',
      category: 'Accessories',
      price: 149,
      status: 'In Stock',
    },
  ];

  searchQuery = '';

  loading = false;

  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  searchProducts = () => {
    this.loading = true;
    this.cd.markForCheck();
    const query = this.searchQuery.toLowerCase();
    setTimeout(() => {
      Promise.resolve().then(() => {
        this.filteredProducts = this.products.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.status.toLowerCase().includes(query)
        );
        this.loading = false;
        this.cd.markForCheck();
      });
    }, 300);
  };
}
