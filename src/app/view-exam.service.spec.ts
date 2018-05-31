import { TestBed, inject } from '@angular/core/testing';

import { ViewExamService } from './view-exam.service';

describe('ViewExamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewExamService]
    });
  });

  it('should be created', inject([ViewExamService], (service: ViewExamService) => {
    expect(service).toBeTruthy();
  }));
});
