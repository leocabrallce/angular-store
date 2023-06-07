import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from 'src/app/catalogue/catalogue/catalogue.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

const routes: Routes = [
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
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
