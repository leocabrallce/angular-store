import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatalogueComponent } from './products-catalogue.component';

describe('ProductsCatalogueComponent', () => {
  let component: ProductsCatalogueComponent;
  let fixture: ComponentFixture<ProductsCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCatalogueComponent]
    });
    fixture = TestBed.createComponent(ProductsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
