import { TestBed, inject } from '@angular/core/testing';

import { GenerateExamService } from './generate-exam.service';

describe('GenerateExamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateExamService]
    });
  });

  it('should be created', inject([GenerateExamService], (service: GenerateExamService) => {
    expect(service).toBeTruthy();
  }));
});
