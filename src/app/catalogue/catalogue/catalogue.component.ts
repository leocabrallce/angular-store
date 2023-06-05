import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent {
  products$: Observable<Product[]>;

  constructor(private storeService: CatalogueService) {
    this.products$ = this.storeService.products$;
  }

  addItemsToCart(product: Product): void {
    this.storeService.addItemsToCart(product);
  }
}
