import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {

  constructor() { }
  login(username: string, password: string): boolean {
    if (username == 'Dominik' && password == 'test') {
      sessionStorage.setItem('login', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return sessionStorage.getItem('login');
  }
}
