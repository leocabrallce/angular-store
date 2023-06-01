import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/store.service';
import Product from 'src/types/product.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-cart-item',
  templateUrl: './products-cart-item.component.html',
})
export class ProductsCartItemComponent {
  @Input()
  product!: Product;
  @Input()
  index!: number;

  faTrash = faTrash;

  constructor(private storeService: StoreService) { }

  removeFromCart(index: number): void {
    this.storeService.removeItemFromCartByIndex(index);
  }
}
