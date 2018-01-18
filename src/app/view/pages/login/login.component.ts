import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() { }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);
    }
  }
}
