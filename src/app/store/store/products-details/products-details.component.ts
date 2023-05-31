import { Component, Input } from '@angular/core';
import Product from '../../../../types/product.model';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
})
export class ProductsDetailsComponent {
  @Input()
  product!: Product;

  @Input()
  small!: boolean;
}
