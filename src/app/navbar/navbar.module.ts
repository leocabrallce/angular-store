import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    SearchComponent
  ]
})
export class NavbarModule { }
