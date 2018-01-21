import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { AuthentificationService } from '../../../library/services/authentification-service.service';
import { SettingsService } from '../../../library/services/settings-service.service';
import { UserService } from '../../../library/api/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  login: any = {
    username: '',
    password: ''
  }
  errorMsg: String = '';
  showError: Boolean = false;
  
  constructor(
    private auth: AuthentificationService, 
    private router: Router,
    private settingsService: SettingsService,
    private userService: UserService
  ) { }

  ngOnInit() { }

  onLoginSubmit() {
      this.showError = false;
    if (this.auth.login(this.login.username, this.login.password)) {
      this.userService.getUserByUsername(this.login.username).subscribe(
        user => this.settingsService.setUser(user)
      )
      this.router.navigateByUrl('home');
    } else {
      this.errorMsg = 'Invalid Credentials';
      this.showError = true;
      this.login.password = '';
      return false;
    }
  }
}
