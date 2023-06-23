import { Component, Input } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/cart/cart.service';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() product!: Product;
  faCartPlus = faCartPlus;

  constructor(private cartService: CartService) { }

  addToCart(product: Product): void {
    this.cartService.addItemsToCart(product);
  }
}
