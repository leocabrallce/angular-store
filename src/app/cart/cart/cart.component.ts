import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems$: Observable<Product[]>;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
    this.total$ = this.cartService.total$;
  }

  removeItem(index: number): void {
    this.cartService.removeItemFromCartByIndex(index);
  }
}
