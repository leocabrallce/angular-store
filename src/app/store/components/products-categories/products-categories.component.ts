import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
})
export class ProductsCategoriesComponent {
  selectedCategory$ = this.storeService.selectedCategory$;
  categories$: Observable<string[]>;

  constructor(private storeService: StoreService) {
    this.selectedCategory$ = this.storeService.selectedCategory$;
    this.categories$ = this.storeService.categories$;
  }

  selectCategory(category: string) {
    const newCategory = category === this.selectedCategory$.value ? '' : category;
    this.storeService.changeCategory(newCategory);
  }
}
