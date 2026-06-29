import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';

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
    <div
      class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-4"
    >
      <div
        class="flex sm:items-center justify-between mb-4 sm:flex-row flex-col gap-2"
      >
        <span class="font-medium text-base">Products Overview</span>
        <p-iconfield class="sm:w-auto w-full">
          <p-inputicon class="pi pi-search" />
          <input
            pInputText
            [(ngModel)]="searchQuery"
            placeholder="Search products..."
            class="p-inputtext-sm md:w-auto! w-full!"
            (ngModelChange)="searchProducts()"
          />
        </p-iconfield>
      </div>
      <div class="flex flex-col gap-2">
        <p-table
          [value]="filteredProducts"
          selectionMode="single"
          [(selection)]="selectedProduct"
          [loading]="loading"
          [rows]="5"
        >
          <ng-template #header>
            <tr>
              <th pSortableColumn="name">Name <p-sort-icon field="name" /></th>
              <th pSortableColumn="category">
                Category <p-sort-icon field="category" />
              </th>

              <th pSortableColumn="price">
                Price <p-sort-icon field="price" />
              </th>
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
    </div>
  `
})
export class ProductOverviewWidget {
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
  filteredProducts: any = [];

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  searchProducts = () => {
    this.loading = true;
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        product.status.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    setTimeout(() => {
      this.loading = false;
    }, 300);
  };
}
