import { TestBed } from '@angular/core/testing';

import { Iso8583Service } from './iso8583.service';

describe('Iso8583Service', () => {
  let service: Iso8583Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Iso8583Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
