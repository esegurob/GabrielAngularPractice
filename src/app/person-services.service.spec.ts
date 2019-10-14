import { TestBed } from '@angular/core/testing';

import { PersonServicesService } from './person-services.service';

describe('PersonServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonServicesService = TestBed.get(PersonServicesService);
    expect(service).toBeTruthy();
  });
});
