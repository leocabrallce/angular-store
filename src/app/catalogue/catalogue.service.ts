import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import Product from 'src/types/product.model';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  // TODO: move this to a injected config file
  private pageSize = 6;

  keywords$ = new BehaviorSubject<string>('');
  selectedCategory$ = new BehaviorSubject<string>('');
  currentPage$ = new BehaviorSubject<number>(1);

  allProducts$ = ajax.getJSON<Product[]>('/assets/store.json');

  filteredProducts$ = combineLatest([
    this.allProducts$,
    this.keywords$,
    this.selectedCategory$,
  ]).pipe(
    map(([products, keywords, category]) => {
      let filteredProducts = products;
      if (keywords) {
        filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(keywords.toLowerCase()));
      }
      if (category) {
        filteredProducts = filteredProducts.filter((product) => product.category === category);
      }
      return filteredProducts;
    })
  );

  products$ = combineLatest([
    this.filteredProducts$,
    this.currentPage$,
  ]).pipe(
    map(([products, currentPage]) => {
      const start = (currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return products.slice(start, end);
    })
  );

  numberOfPages$ = combineLatest([
    this.filteredProducts$,
  ]).pipe(
    map(([products]) => {
      return Math.ceil(products.length / this.pageSize);
    })
  );

  categories$ = combineLatest([
    this.allProducts$,
    this.keywords$,
  ]).pipe(
    map(([products, keywords]) => {
      let filteredProducts = products;
      if (keywords) {
        filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(keywords.toLowerCase()));
      }
      const categoriesAndCounts: Map<string, number> = new Map();
      filteredProducts.forEach((product) => {
        const count = categoriesAndCounts.get(product.category) || 0;
        categoriesAndCounts.set(product.category, count + 1);
      });
      return categoriesAndCounts;
    })
  );

  changePage(page: number) {
    this.currentPage$.next(page);
  }

  changeKeywords(keywords: string) {
    this.keywords$.next(keywords);
    this.currentPage$.next(1);
  }

  changeCategory(category: string) {
    this.selectedCategory$.next(category);
    this.currentPage$.next(1);
  }

  constructor() { }
}
