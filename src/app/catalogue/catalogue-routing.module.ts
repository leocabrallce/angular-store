import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent,
    children: [
      {
        path: ':category',
        component: CatalogueComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
