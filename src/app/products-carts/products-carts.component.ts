import { Component } from '@angular/core';
import { ProductsCartService } from '../products-cart.service';

@Component({
  selector: 'app-products-carts',
  templateUrl: './products-carts.component.html',
})

export class ProductsCartsComponent {
  cartItems = this.productsCartService.getCartItems();

  constructor(private productsCartService: ProductsCartService) { }

  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }
}
