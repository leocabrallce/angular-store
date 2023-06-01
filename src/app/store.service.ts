import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import Product from '../types/product.model';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // TODO: move this to a injected config file
  private pageSize = 6;
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  keywords$ = new BehaviorSubject<string>('');
  selectedCategory$ = new BehaviorSubject<string>('');
  currentPage$ = new BehaviorSubject<number>(1);

  allProducts$ = ajax.getJSON<Product[]>('/assets/store.json');

  products$ = combineLatest([
    this.allProducts$,
    this.currentPage$,
    this.keywords$,
    this.selectedCategory$,
  ]).pipe(
    map(([products, currentPage, keywords, category]) => {
      let filteredProducts = products;
      if (keywords) {
        filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(keywords.toLowerCase()));
      }
      if (category) {
        filteredProducts = filteredProducts.filter((product) => product.category === category);
      }
      const start = (currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return filteredProducts.slice(start, end);
    })
  );

  numberOfPages$ = combineLatest([
    this.products$,
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
      return Math.ceil(filteredProducts.length / this.pageSize);
    })
  );

  total$ = this.cartItems$.pipe(
    map((items: Product[]) => {
      return items.reduce((acc, item) => acc + item.price, 0);
    })
  );

  categories$ = this.allProducts$.pipe(
    map((products: Product[]) => {
      const categories = products.map(product => product.category);
      return Array.from(new Set(categories));
    })
  );

  changePage(page: number) {
    this.currentPage$.next(page);
  }

  changeKeywords(keywords: string) {
    this.keywords$.next(keywords);
  }

  changeCategory(category: string) {
    this.selectedCategory$.next(category);
  }

  addItemsToCart(product: Product) {
    const currentItems = this.cartItemsSubject.getValue();
    const newItems = [...currentItems, product];
    this.cartItemsSubject.next(newItems);
  }

  removeItemFromCart(product: Product) {
    const currentItems = this.cartItemsSubject.getValue();
    const newItems = currentItems.filter(item => item.id !== product.id);
    this.cartItemsSubject.next(newItems);
  }

  removeItemFromCartByIndex(index: number) {
    const currentItems = this.cartItemsSubject.getValue();
    const newItems = currentItems.filter((item, i) => i !== index);
    this.cartItemsSubject.next(newItems);
  }

  constructor() { }
}
