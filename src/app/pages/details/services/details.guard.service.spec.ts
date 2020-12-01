import { TestBed } from '@angular/core/testing';

import { Details.GuardService } from './details.guard';

describe('Details.GuardService', () => {
  let service: Details.GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Details.GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
