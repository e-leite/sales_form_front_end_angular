import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarMenuItem } from '../models/sidebar-menu-item';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
    private sidebarMenuItems: SidebarMenuItem[] = [
        { label: 'Programing Languages', route: 'programinglanguages', icon: 'code' },
    ];

    getSidebarMenuItems(): Observable<SidebarMenuItem[]> {
        return of(this.sidebarMenuItems);
    }  
}
