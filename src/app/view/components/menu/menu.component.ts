import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../../library/services/settings-service.service';
import { User } from '../../../library/api/index';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  action: any;
  user: User;

  constructor(private router: Router, private settingsService: SettingsService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(
      p => {
        this.action = p.area
        this.user = this.settingsService.getUser();
      }
    );
  }

  ngOnInit() {
  }

}
