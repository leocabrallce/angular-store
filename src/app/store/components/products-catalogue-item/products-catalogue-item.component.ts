import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreService } from '../../../store.service';
import Product from '../../../../types/product.model';

@Component({
  selector: 'app-products-catalogue-item',
  templateUrl: './products-catalogue-item.component.html',
})
export class ProductsCatalogueItemComponent {
  @Input() product!: Product;

  constructor(private storeService: StoreService) { }

  addToCart(product: Product): void {
    this.storeService.addItemsToCart(product);
  }
}
