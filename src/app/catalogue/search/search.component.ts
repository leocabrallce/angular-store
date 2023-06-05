import { Component } from '@angular/core';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private catalogueService: CatalogueService) { }

  search(input: string) {
    this.catalogueService.changeKeywords(input);
  }
}
