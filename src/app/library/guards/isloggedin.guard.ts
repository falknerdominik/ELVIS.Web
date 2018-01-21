import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from '../services/settings-service.service';

@Injectable()
export class IsloggedinGuard implements CanActivate {
  constructor(private settingsService: SettingsService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    if(!this.settingsService.isLoggedIn()) {
      this.router.navigateByUrl('');
      return false;
    } 
    return true;
  }
}
