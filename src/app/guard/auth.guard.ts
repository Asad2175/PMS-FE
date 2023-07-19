import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class AuthGuard implements CanActivate {
   constructor( private settings : SettingsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.settings.isLoggedIn) {
      return true;
    }
    console.log('router');
    this.router.navigate(['/not-found']);
    return false;
  }
}