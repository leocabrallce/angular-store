import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CatalogueService } from 'src/app/catalogue/catalogue.service';
import Product from 'src/types/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
  products$: Observable<Product[]>;
  currentCategory?: Subscription;

  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute) {
    this.products$ = this.catalogueService.products$;
  }

  ngOnInit(): void {
    this.currentCategory = this.route.paramMap.subscribe((params) => {
      const category = params.get('category') || '';
      this.catalogueService.changeCategory(category);
    });
  }

  ngOnDestroy(): void {
    this.catalogueService.reset();
    this.currentCategory?.unsubscribe();
  }
}
