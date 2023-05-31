import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatalogueItemComponent } from './products-catalogue-item.component';

describe('ProductsCatalogueItemComponent', () => {
  let component: ProductsCatalogueItemComponent;
  let fixture: ComponentFixture<ProductsCatalogueItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCatalogueItemComponent]
    });
    fixture = TestBed.createComponent(ProductsCatalogueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
