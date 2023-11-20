import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoatableComponent } from './todoatable.component';

describe('TodoatableComponent', () => {
  let component: TodoatableComponent;
  let fixture: ComponentFixture<TodoatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
