import { Injectable } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService implements CanActivate {
  cartIsEmpty = true;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartIsEmpty = items.length === 0;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  canActivate() {
    if (this.cartIsEmpty) {
      return this.router.parseUrl('/');
    } else {
      return true;
    }
  }
}
