import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class CheckoutModule { }
