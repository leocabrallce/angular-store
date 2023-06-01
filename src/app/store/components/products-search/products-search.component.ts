import { Component, Input, Output } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
})
export class ProductsSearchComponent {
  constructor(private storeService: StoreService) { }

  search(input: string) {
    this.storeService.changeKeywords(input);
  }
}
