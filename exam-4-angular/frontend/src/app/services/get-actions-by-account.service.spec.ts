import { TestBed } from '@angular/core/testing';

import { GetActionsByAccountService } from './get-actions-by-account.service';

describe('GetActionsByAccountService', () => {
  let service: GetActionsByAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetActionsByAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
