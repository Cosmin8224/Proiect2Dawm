import { TestBed } from '@angular/core/testing';

import { ServiciuAngajatiService } from './serviciu-angajati.service';

describe('ServiciuAngajatiService', () => {
  let service: ServiciuAngajatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuAngajatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
