import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCartItemComponent } from './products-cart-item.component';

describe('ProductsCartItemComponent', () => {
  let component: ProductsCartItemComponent;
  let fixture: ComponentFixture<ProductsCartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCartItemComponent]
    });
    fixture = TestBed.createComponent(ProductsCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
