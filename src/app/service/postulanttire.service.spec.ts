import { TestBed } from '@angular/core/testing';

import { PostulanttireService } from './postulanttire.service';

describe('PostulanttireService', () => {
  let service: PostulanttireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulanttireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
