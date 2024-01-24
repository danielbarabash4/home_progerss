import { TestBed } from '@angular/core/testing';

import { AddActionService } from './add-action.service';

describe('AddActionService', () => {
  let service: AddActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
