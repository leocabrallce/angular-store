import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { LegalModule } from './legal/legal.module';
import { APP_CONFIG, webAppConfig } from './app.settings';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    CatalogueModule,
    CartModule,
    RouterModule,
    CheckoutModule,
    LegalModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: webAppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
