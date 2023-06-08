import { Component, Inject, OnDestroy } from '@angular/core';
import { AppConfig } from 'src/types/app-config.model';
import { APP_CONFIG } from 'src/app/app.settings';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnDestroy {
  faStore = faStore;
  title = 'Products Store';
  subscription: any;

  constructor(
    @Inject(APP_CONFIG)
    config: AppConfig,
    route: ActivatedRoute,
    private catalogueService: CatalogueService,
  ) {
    this.language = config.language;

    if (this.language !== 'en' && this.language !== 'fr') {
      this.language = 'en';
    }

    this.subscription = route.title.subscribe((title) => {
      this.title = title || this.title;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectLanguage(language: string) {
    this.catalogueService.selectLanguage(language);
    this.catalogueService.changeCategory('');
    this.language = language;
  }

  language = 'en';
}
