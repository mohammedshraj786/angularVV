import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetspecificProductComponent } from './getspecific-product.component';

describe('GetspecificProductComponent', () => {
  let component: GetspecificProductComponent;
  let fixture: ComponentFixture<GetspecificProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetspecificProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetspecificProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
