import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../../../store.service';
import Product from '../../../../types/product.model';

@Component({
  selector: 'app-products-catalogue',
  templateUrl: './products-catalogue.component.html',
})
export class ProductsCatalogueComponent {
  products$: Observable<Product[]>;

  constructor(private storeService: StoreService) {
    this.products$ = this.storeService.products$;
  }

  addItemsToCart(product: Product): void {
    this.storeService.addItemsToCart(product);
  }
}
