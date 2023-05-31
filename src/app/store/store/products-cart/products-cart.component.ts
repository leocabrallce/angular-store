import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../../../store.service';
import Product from '../../../../types/product.model';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
})
export class ProductsCartComponent {
  cartItems$: Observable<Product[]>;
  total$: Observable<number>;

  constructor(private storeService: StoreService) {
    this.cartItems$ = this.storeService.cartItems$;
    this.total$ = this.storeService.total$;
  }

  removeItem(index: number): void {
    this.storeService.removeItemFromCartByIndex(index);
  }
}
