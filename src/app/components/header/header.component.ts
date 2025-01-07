import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigatorDepartmentsComponent } from '../navigator-departments/navigator-departments.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, SidebarComponent, NavigatorDepartmentsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
