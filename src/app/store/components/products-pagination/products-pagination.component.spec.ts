import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPaginationComponent } from './products-pagination.component';

describe('ProductsPaginationComponent', () => {
  let component: ProductsPaginationComponent;
  let fixture: ComponentFixture<ProductsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPaginationComponent]
    });
    fixture = TestBed.createComponent(ProductsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
