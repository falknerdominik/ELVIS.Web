import { TestBed, inject } from '@angular/core/testing';

import { PartyserviceService } from './partyservice.service';

describe('PartyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartyserviceService]
    });
  });

  it('should be created', inject([PartyserviceService], (service: PartyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
