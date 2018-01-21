import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './library/services/settings-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ELVIS';

  constructor(private router: Router, private settingsService: SettingsService) { 
    settingsService.reset();
  }
}
