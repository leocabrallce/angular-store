import { Component, Input } from '@angular/core';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  @Input()
  product!: Product;

  @Input()
  small!: boolean;

  @Input()
  lineClamp!: boolean;
}
