import { TestBed } from '@angular/core/testing';

import { DetailstiragesService } from './detailstirages.service';

describe('DetailstiragesService', () => {
  let service: DetailstiragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailstiragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
