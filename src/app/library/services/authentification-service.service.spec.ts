import { TestBed, inject } from '@angular/core/testing';

import { AuthentificationService } from './authentification-service.service';

describe('AuthentificationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentificationService]
    });
  });

  it('should be created', inject([AuthentificationService], (service: AuthentificationService) => {
    expect(service).toBeTruthy();
  }));
});
