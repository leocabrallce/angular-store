import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-catalogue-item',
  templateUrl: './products-catalogue-item.component.html',
})
export class ProductsCatalogueItemComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}
