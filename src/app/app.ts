import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./core/layout/sidebar/sidebar-component";
import { HeaderComponent } from './core/layout/header/header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Job Search Tool');
}
