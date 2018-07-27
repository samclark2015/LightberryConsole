import { Component, OnInit } from '@angular/core';
import {Auth0Service} from '../../services/auth0.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private auth0Service: Auth0Service
  ) {
    this.auth0Service.handleAuthentication();
  }

  ngOnInit() {

  }

}
