import { TestBed, inject } from '@angular/core/testing';

import { SaveExamService } from './save-exam.service';

describe('SaveExamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveExamService]
    });
  });

  it('should be created', inject([SaveExamService], (service: SaveExamService) => {
    expect(service).toBeTruthy();
  }));
});
