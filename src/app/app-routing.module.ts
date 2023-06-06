import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from 'src/app/catalogue/catalogue/catalogue.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    children: [
      {
        path: ':category',
        component: CatalogueComponent
      },
      {
        path: '',
        component: CatalogueComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
