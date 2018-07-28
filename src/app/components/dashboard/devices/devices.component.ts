import { Component, OnInit } from '@angular/core';
import {Auth0Service} from '../../../services/auth0.service';
import {LightberryService} from '../../../services/lightberry.service';
import {Device} from '../../../model/Device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  token: string;
  devices: Device[];

  constructor(
    private auth0Service: Auth0Service,
    private lightberryService: LightberryService
  ) { }

  ngOnInit() {
    this.token = this.auth0Service.getToken();
    this.loadDevices();
  }

  loadDevices() {
    this.lightberryService.getDevices()
      .subscribe((devices) => {
        this.devices = devices;
        console.log(devices);
      });
  }

}
