import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ItemComponent } from './item/item.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    CatalogueComponent,
    ItemComponent,
    CategoriesComponent,
    PaginationComponent,
    SearchComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    CatalogueRoutingModule,
    SharedModule,
  ],
  exports: [
    CatalogueComponent,
    CategoriesComponent,
    PaginationComponent,
    SearchComponent,
  ]
})
export class CatalogueModule { }
