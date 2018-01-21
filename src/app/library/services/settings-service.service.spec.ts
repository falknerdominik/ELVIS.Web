import { TestBed, inject } from '@angular/core/testing';

import { SettingsService } from './settings-service.service';

describe('SettingsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
