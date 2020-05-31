import { TestBed } from '@angular/core/testing';

import { ClientListServiceService } from './client-list-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClientListServiceService', () => {
  let service: ClientListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(ClientListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
