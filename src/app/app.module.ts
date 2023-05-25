import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsCatalogueComponent } from './products-catalogue/products-catalogue.component';
import { ProductsCartsComponent } from './products-carts/products-carts.component';
import { ProductsCatalogueItemComponent } from './products-catalogue-item/products-catalogue-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsCatalogueComponent,
    ProductsCartsComponent,
    ProductsCatalogueItemComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
