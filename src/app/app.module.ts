import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { APP_CONFIG, webAppConfig } from './app.settings';
import { ProductsService } from '../app/products.service';
import { NavbarModule } from './navbar/navbar.module';

function initializeAppFactory(
  productsService: ProductsService,
): () => Promise<any> {
  return () => productsService.loadProducts();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    CatalogueModule,
    CartModule,
    RouterModule,
    CheckoutModule,
    NavbarModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: webAppConfig
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [ProductsService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
