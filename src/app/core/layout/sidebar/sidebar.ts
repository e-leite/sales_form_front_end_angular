import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
    sidebarMenuItems: any[] = [
        { label: 'Home', route: '', icon: 'home' },
        { label: 'Teams', route: '', icon: 'groups' },
    ]
}
