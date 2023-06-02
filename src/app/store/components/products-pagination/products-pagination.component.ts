import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-products-pagination',
  templateUrl: './products-pagination.component.html',
})
export class ProductsPaginationComponent {
  numberOfPages$: Observable<number>;
  currentPage$: Observable<number>;
  pages!: number[];
  firstPage = 1;
  lastPage = 1;

  constructor(private storeService: StoreService) {
    this.numberOfPages$ = this.storeService.numberOfPages$;
    this.currentPage$ = this.storeService.currentPage$;
    this.numberOfPages$.subscribe((numberOfPages) => {
      this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
      this.lastPage = numberOfPages;
    });
  }

  changePage(page: number): void {
    this.storeService.changePage(page);
  }
}
