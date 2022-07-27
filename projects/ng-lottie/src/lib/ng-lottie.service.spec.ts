import { TestBed } from '@angular/core/testing';

import { NgLottieService } from './ng-lottie.service';

describe('NgLottieService', () => {
  let service: NgLottieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLottieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
