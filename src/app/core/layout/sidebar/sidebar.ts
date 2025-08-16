import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service';
import { SidebarMenuItem } from '../../models/sidebar-menu-item';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit {

    readonly sidebarService = inject(SidebarService)    
    
    sidebarMenuItems: SidebarMenuItem[] = [];
    
    ngOnInit(): void {
        this.sidebarService.getSidebarMenuItems().subscribe(
            items => this.sidebarMenuItems = items
        )
    }
    
}
