import { Component, Input } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() product!: Product;
  faCartPlus = faCartPlus;

  constructor(private catalogueService: CatalogueService) { }

  addToCart(product: Product): void {
    this.catalogueService.addItemsToCart(product);
  }
}
