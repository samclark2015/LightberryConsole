import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Auth0Service} from '../../services/auth0.service';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {LightberryService} from '../../services/lightberry.service';
import {SidebarItem} from './sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  user: User;
  title = 'Lightberry Console';
  sidebarItems = [
    new SidebarItem('Devices', '/dashboard/devices')
  ];

  constructor(
    private auth0Service: Auth0Service,
    private router: Router,
    private lightberryService: LightberryService
  ) { }

  ngOnInit() {
    this.lightberryService.getUser()
      .subscribe((user) => {
        this.user = user;
        if (user.isAdmin) {
          this.sidebarItems.push(new SidebarItem('Admin', '/dashboard/admin'));
        }
      });
  }

  handleLogout() {
    Auth0Service.logout();
    this.router.navigate(['/login']);
  }

}
