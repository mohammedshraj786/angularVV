import { TestBed } from '@angular/core/testing';

import { AjayService } from './ajay.service';

describe('AjayService', () => {
  let service: AjayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
