import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCatalogueComponent } from './store/products-catalogue/products-catalogue.component';
import { ProductsCatalogueItemComponent } from './store/products-catalogue-item/products-catalogue-item.component';
import { ProductsDetailsComponent } from './store/products-details/products-details.component';
import { ProductsCartComponent } from './store/products-cart/products-cart.component';
import { StoreService } from '../store.service';

@NgModule({
  declarations: [
    ProductsCatalogueComponent,
    ProductsCatalogueItemComponent,
    ProductsDetailsComponent,
    ProductsCartComponent
  ],
  imports: [
    CommonModule
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
