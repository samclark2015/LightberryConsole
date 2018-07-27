import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Auth0Service} from './auth0.service';

@Injectable({
  providedIn: 'root'
})
export class Auth0Guard implements CanActivate {
  constructor(
    private auth0Service: Auth0Service,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!Auth0Service.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
