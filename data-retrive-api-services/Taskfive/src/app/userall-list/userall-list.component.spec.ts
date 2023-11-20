import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserallListComponent } from './userall-list.component';

describe('UserallListComponent', () => {
  let component: UserallListComponent;
  let fixture: ComponentFixture<UserallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserallListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
