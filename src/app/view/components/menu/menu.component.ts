import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../../library/services/settings-service.service';
import { User } from '../../../library/api/index';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;

  constructor(private router: Router, private settingsService: SettingsService) { 
    this.user = this.settingsService.getUser();
  }

  ngOnInit() {
  }

}
