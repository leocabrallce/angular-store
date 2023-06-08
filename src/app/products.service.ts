import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Product from 'src/types/product.model';
import { APP_CONFIG } from './app.settings';
import { AppConfig } from 'src/types/app-config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnDestroy {
  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) { }

  products$ = new BehaviorSubject<Product[]>([]);
  private subscription: any;

  async loadProducts() {
    this.subscription = this.http.get<Product[]>(this.config.dataSourceURL, {
      headers: {
        'Accept-Language': this.config.language,
      }
    }).subscribe((products) => {
      this.products$.next(products);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
