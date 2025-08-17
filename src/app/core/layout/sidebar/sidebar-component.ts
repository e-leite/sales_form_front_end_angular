import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service';
import { SidebarMenuItem } from '../../models/sidebar-menu-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss'
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
