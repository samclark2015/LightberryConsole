import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Auth0Service} from '../../services/auth0.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  title = 'Lightberry Console';

  constructor(
    private auth0Service: Auth0Service,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogout() {
    Auth0Service.logout();
    this.router.navigate(['/login']);
  }

}
