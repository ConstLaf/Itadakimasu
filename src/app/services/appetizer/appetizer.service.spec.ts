import { TestBed } from '@angular/core/testing';

import { AppetizerService } from './appetizer.service';

describe('AppetizerService', () => {
  let service: AppetizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppetizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
