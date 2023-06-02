import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCatalogueComponent } from './components/products-catalogue/products-catalogue.component';
import { ProductsCatalogueItemComponent } from './components/products-catalogue-item/products-catalogue-item.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { StoreService } from '../store.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsCartItemComponent } from './components/products-cart-item/products-cart-item.component';
import { ProductsCategoriesComponent } from './components/products-categories/products-categories.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { FormsModule } from '@angular/forms';
import { ProductsPaginationComponent } from './components/products-pagination/products-pagination.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    ProductsCatalogueComponent,
    ProductsCatalogueItemComponent,
    ProductsDetailsComponent,
    ProductsCartComponent,
    ProductsCartItemComponent,
    ProductsCategoriesComponent,
    ProductsSearchComponent,
    ProductsPaginationComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ProductsCatalogueComponent,
    ProductsCartComponent,
    ProductsCategoriesComponent,
    ProductsSearchComponent,
    ProductsPaginationComponent
  ],
  providers: [
    StoreService,
  ]
})
export class StoreModule { }
