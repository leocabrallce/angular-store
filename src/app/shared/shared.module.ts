import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductDetailsComponent
  ]
})
export class SharedModule { }
