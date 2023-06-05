import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CartComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
  exports: [
    CartComponent,
  ],
  providers: [
    CartService,
  ]
})
export class CartModule { }
