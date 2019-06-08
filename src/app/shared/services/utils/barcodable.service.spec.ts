import { TestBed } from '@angular/core/testing';

import { BarcodableService } from './barcodable.service';

describe('BarcodableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarcodableService = TestBed.get(BarcodableService);
    expect(service).toBeTruthy();
  });
});
