import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarItems = [
    {
      label: 'Minha conta',
      path: 'my_account',
      icon: 'bi-house-fill',
    },
    {
      label: 'Meus dados',
      path: 'my_data',
      icon: 'bi-person-fill',
    },
    {
      label: 'Meus pedidos',
      path: 'orders',
      icon: 'bi-basket-fill',
    },
  ];
}
