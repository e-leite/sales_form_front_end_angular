import { TestBed } from '@angular/core/testing';

import { SalesTeamService } from './sales-team-service';

describe('SalesTeamService', () => {
  let service: SalesTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
