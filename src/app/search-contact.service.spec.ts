import { TestBed } from '@angular/core/testing';

import { SearchContactService } from './search-contact.service';

describe('SearchContactService', () => {
  let service: SearchContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
