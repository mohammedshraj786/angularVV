import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeFinderComponent } from './age-finder.component';

describe('AgeFinderComponent', () => {
  let component: AgeFinderComponent;
  let fixture: ComponentFixture<AgeFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
