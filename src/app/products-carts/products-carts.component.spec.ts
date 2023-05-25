import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCartsComponent } from './products-carts.component';

describe('ProductsCartsComponent', () => {
  let component: ProductsCartsComponent;
  let fixture: ComponentFixture<ProductsCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCartsComponent]
    });
    fixture = TestBed.createComponent(ProductsCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
