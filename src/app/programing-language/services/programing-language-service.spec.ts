import { TestBed } from '@angular/core/testing';

import { ProgramingLanguageService } from './programing-language-service';

describe('ProgramingLanguageService', () => {
  let service: ProgramingLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramingLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
