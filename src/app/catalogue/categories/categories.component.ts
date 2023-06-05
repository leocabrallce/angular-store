import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  selectedCategory$ = this.catalogueService.selectedCategory$;
  categories$: Observable<Map<string, number>>;

  constructor(private catalogueService: CatalogueService) {
    this.selectedCategory$ = this.catalogueService.selectedCategory$;
    this.categories$ = this.catalogueService.categories$;
  }

  selectCategory(category: string) {
    const newCategory = category === this.selectedCategory$.value ? '' : category;
    this.catalogueService.changeCategory(newCategory);
  }
}
