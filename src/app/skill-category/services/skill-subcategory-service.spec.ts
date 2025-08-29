import { TestBed } from '@angular/core/testing';

import { SkillSubcategoryService } from './skill-subcategory-service';

describe('SkillSubcategoryService', () => {
  let service: SkillSubcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillSubcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
