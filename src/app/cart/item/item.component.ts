import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import Product from 'src/types/product.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input()
  product!: Product;
  @Input()
  index!: number;

  faTrash = faTrash;

  constructor(private cartService: CartService) { }

  removeFromCart(index: number): void {
    this.cartService.removeItemFromCartByIndex(index);
  }
}
