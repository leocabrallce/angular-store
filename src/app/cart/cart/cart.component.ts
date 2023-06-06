import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems$: Observable<Product[]>;
  total$: Observable<number>;
  routerSubscription?: Subscription;
  checkoutAvailable: boolean = false;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems$ = this.cartService.cartItems$;
    this.total$ = this.cartService.total$;
  }

  removeItem(index: number): void {
    this.cartService.removeItemFromCartByIndex(index);
  }

  ngAfterViewInit(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkoutAvailable = event.url === '/checkout';
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }
}
