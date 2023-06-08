import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from 'src/app/catalogue/catalogue/catalogue.component';

const routes: Routes = [
  {
    path: 'checkout',
    title: 'Checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
  },
  {
    path: '',
    title: 'Catalogue',
    children: [
      {
        path: ':category',
        component: CatalogueComponent,
      },
      {
        path: '',
        component: CatalogueComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
