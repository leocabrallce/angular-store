import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { TermsComponent } from '../legal/terms/terms.component';
import { PrivacyComponent } from '../legal/privacy/privacy.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
    RouterModule,
  ]
})
export class LegalModule { }
