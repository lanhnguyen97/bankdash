import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="bg-white rounded-card overflow-hidden">
      <div class="border-b border-line flex items-center gap-6 sm:gap-9 px-4 sm:px-8 overflow-x-auto">
        <a
          *ngFor="let t of tabs"
          [routerLink]="t.to"
          routerLinkActive="text-brand"
          #rla="routerLinkActive"
          [ngClass]="rla.isActive ? 'text-brand' : 'text-ink-muted'"
          class="relative pt-6 pb-4 text-md font-medium whitespace-nowrap"
        >
          {{ t.label }}
          <span
            *ngIf="rla.isActive"
            class="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded bg-brand"
          ></span>
        </a>
      </div>
      <router-outlet />
    </div>
  `,
})
export class SettingsComponent {
  tabs = [
    { to: 'profile', label: 'Edit Profile' },
    { to: 'preferences', label: 'Preferences' },
    { to: 'security', label: 'Security' },
  ];
}
