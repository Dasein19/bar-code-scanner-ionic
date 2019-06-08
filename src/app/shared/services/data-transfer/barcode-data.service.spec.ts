import { TestBed } from '@angular/core/testing';

import { BarcodeDataService } from './barcode-data.service';

describe('BarcodeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarcodeDataService = TestBed.get(BarcodeDataService);
    expect(service).toBeTruthy();
  });
});
