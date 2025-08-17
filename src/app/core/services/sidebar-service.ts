import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarMenuItem } from '../models/sidebar-menu-item';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
    private sidebarMenuItems: SidebarMenuItem[] = [
        { label: 'Sales Teams', route: 'salesteams', icon: 'groups' },
    ];

    getSidebarMenuItems(): Observable<SidebarMenuItem[]> {
        return of(this.sidebarMenuItems);
    }  
}
