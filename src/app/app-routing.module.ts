import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from 'src/app/catalogue/catalogue/catalogue.component';
import { CheckoutService } from './checkout/checkout.service';

const canEnterCheckout: CanActivateFn = () => {
  const checkoutService = inject(CheckoutService);
  const canAccessCheckout = checkoutService.canActivate();

  return canAccessCheckout;
};

const routes: Routes = [
  {
    path: 'checkout',
    title: 'Checkout',
    canActivate: [canEnterCheckout],
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
