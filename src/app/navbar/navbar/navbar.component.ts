import { Component, Inject } from '@angular/core';
import { AppConfig } from 'src/types/app-config.model';
import { APP_CONFIG } from 'src/app/app.settings';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';
import { faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faStore = faStore;

  constructor(
    @Inject(APP_CONFIG)
    config: AppConfig,
    private catalogueService: CatalogueService,
  ) {
    this.language = config.language;

    if (this.language !== 'en' && this.language !== 'fr') {
      this.language = 'en';
    }
  }

  selectLanguage(language: string) {
    this.catalogueService.selectLanguage(language);
    this.language = language;
  }

  language = 'en';
}
