import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';


@Injectable()
export class Auth0Service {

  auth0 = new auth0.WebAuth({
    clientID: 'zF5b6Tw8r712dxTfJF3hcbjb8jMKxxOs',
    domain: 'samclarkme.auth0.com',
    responseType: 'token id_token',
    audience: 'https://samclarkme.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  private static setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  static logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
  }

  static isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  static getToken(): string {
    return localStorage.getItem('access_token');
  }

  constructor(
    private router: Router
  ) {
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        Auth0Service.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/login']);
        console.log(err);
      }
    });
  }

}
