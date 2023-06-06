import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { ItemComponent } from './item/item.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { CatalogueService } from './catalogue.service';


@NgModule({
  declarations: [
    CatalogueComponent,
    ItemComponent,
    CategoriesComponent,
    PaginationComponent,
    SearchComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    CatalogueComponent,
    CategoriesComponent,
    PaginationComponent,
    SearchComponent,
  ],
  providers: [
    CatalogueService,
  ]
})
export class CatalogueModule { }
