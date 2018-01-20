import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { AuthentificationServiceService } from '../../../library/services/authentification-service.service';

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
  
  constructor(private auth: AuthentificationServiceService, private router: Router) { }

  ngOnInit() { }

  onLoginSubmit() {
      this.showError = false;
    if (this.auth.login(this.login.username, this.login.password)) {
      this.router.navigateByUrl('home');
    } else {
      this.errorMsg = 'Invalid Credentials';
      this.showError = true;
      this.login.password = '';
      return false;
    }
  }
}
