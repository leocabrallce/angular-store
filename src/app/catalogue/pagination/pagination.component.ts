import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  numberOfPages$: Observable<number>;
  currentPage$: Observable<number>;
  pages!: number[];
  firstPage = 1;
  lastPage = 1;

  constructor(private catalogueService: CatalogueService) {
    this.numberOfPages$ = this.catalogueService.numberOfPages$;
    this.currentPage$ = this.catalogueService.currentPage$;
    this.numberOfPages$.subscribe((numberOfPages) => {
      this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
      this.lastPage = numberOfPages;
    });
  }

  changePage(page: number): void {
    this.catalogueService.changePage(page);
  }
}
