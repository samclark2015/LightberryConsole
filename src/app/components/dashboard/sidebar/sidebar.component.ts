import { Component, OnInit } from '@angular/core';

class SidebarItem {
  constructor(public name: string, public href: string) {}
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: SidebarItem[] = [
    new SidebarItem('Devices', '/dashboard/devices'),
    new SidebarItem('Admin', '/dashboard/admin')
  ]

  constructor() { }

  ngOnInit() {
  }

}
