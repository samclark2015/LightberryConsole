import {Component, Input, OnInit} from '@angular/core';

export class SidebarItem {
  constructor(public name: string, public href: string) {}
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('items') items: SidebarItem[];

  constructor() { }

  ngOnInit() {
  }

}
