import { TestBed } from '@angular/core/testing';

import { LunchService } from './lunch.service';

describe('LunchService', () => {
  let service: LunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
