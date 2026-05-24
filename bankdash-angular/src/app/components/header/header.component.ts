import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const titles: Record<string, string> = {
  '/dashboard': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/privileges': 'My Privileges',
};

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>();

  private path = signal('/dashboard');
  title = computed(() => {
    const p = this.path();
    if (p.startsWith('/settings')) return 'Setting';
    return titles[p] ?? 'Overview';
  });

  constructor(router: Router) {
    this.path.set(router.url || '/dashboard');
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => this.path.set(e.urlAfterRedirects));
  }
}
