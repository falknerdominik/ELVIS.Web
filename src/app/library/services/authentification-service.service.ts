import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationServiceService {

  constructor() { }
  login(username: string, password: string): boolean {
    if (username == 'test' && password == 'test') {
      sessionStorage.setItem('login', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return sessionStorage.getItem('login');
  }
}
