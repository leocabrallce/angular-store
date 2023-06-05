import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { StoreService } from '../store.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsCartItemComponent } from './components/products-cart-item/products-cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsCartComponent,
    ProductsCartItemComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    ProductsCartComponent,
  ],
  providers: [
    StoreService,
  ]
})
export class StoreModule { }
