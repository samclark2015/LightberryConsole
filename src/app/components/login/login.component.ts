import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Auth0Service} from '../../services/auth0.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
    private auth0Service: Auth0Service
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.auth0Service.login();
  }

}
