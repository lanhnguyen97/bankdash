import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Item = { label: string; icon: string; to: string };

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() mobileOpen = false;
  @Output() close = new EventEmitter<void>();

  items: Item[] = [
    { label: 'Dashboard', icon: 'home', to: '/dashboard' },
    { label: 'Transactions', icon: 'transfer', to: '/transactions' },
    { label: 'Accounts', icon: 'user', to: '/accounts' },
    { label: 'Investments', icon: 'investment', to: '/investments' },
    { label: 'Credit Cards', icon: 'credit-card', to: '/credit-cards' },
    { label: 'Loans', icon: 'loan', to: '/loans' },
    { label: 'Services', icon: 'service', to: '/services' },
    { label: 'My Privileges', icon: 'privileges', to: '/privileges' },
    { label: 'Setting', icon: 'settings', to: '/settings/profile' },
  ];

  blueFilter =
    'brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(7488%) hue-rotate(244deg) brightness(98%) contrast(102%)';
}
