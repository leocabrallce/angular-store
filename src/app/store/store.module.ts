import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCatalogueComponent } from './components/products-catalogue/products-catalogue.component';
import { ProductsCatalogueItemComponent } from './components/products-catalogue-item/products-catalogue-item.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { StoreService } from '../store.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsCartItemComponent } from './components/products-cart-item/products-cart-item.component';

@NgModule({
  declarations: [
    ProductsCatalogueComponent,
    ProductsCatalogueItemComponent,
    ProductsDetailsComponent,
    ProductsCartComponent,
    ProductsCartItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ProductsCatalogueComponent,
    ProductsCatalogueItemComponent,
    ProductsDetailsComponent,
    ProductsCartComponent
  ],
  providers: [
    StoreService,
  ]
})
export class StoreModule { }
