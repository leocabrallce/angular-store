import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { TermsComponent } from '../legal/terms/terms.component';
import { PrivacyComponent } from '../legal/privacy/privacy.component';


@NgModule({
  declarations: [
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
