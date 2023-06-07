import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  selectedCategory$ = this.catalogueService.selectedCategory$;
  categories$: Observable<Map<string, number>>;
  language: string = this.catalogueService.language;
  title: string = 'all categories';

  constructor(private catalogueService: CatalogueService, private router: Router) {
    this.selectedCategory$ = this.catalogueService.selectedCategory$;
    this.categories$ = this.catalogueService.categories$;
  }

  selectCategory(category: string) {
    const newCategory = category === this.selectedCategory$.value ? '' : category;
    // changing via service
    // this.catalogueService.changeCategory(newCategory);

    // changing via router
    this.router.navigate(['/', newCategory]);
  }
}
