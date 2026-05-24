import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from '../../../components/toggle/toggle.component';

@Component({
  selector: 'app-preferences',
  imports: [FormsModule, ToggleComponent],
  template: `
    <div class="px-4 sm:px-8 py-6 sm:py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
        <label class="block">
          <div class="text-base text-ink mb-2">Currency</div>
          <input [(ngModel)]="currency" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Time Zone</div>
          <input [(ngModel)]="tz" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
      </div>
      <div class="mt-9">
        <h3 class="text-xl font-semibold text-ink mb-5">Notification</h3>
        <div class="space-y-5">
          <app-toggle [value]="notif1" (valueChange)="notif1 = $event" label="I send or receive digita currency" />
          <app-toggle [value]="notif2" (valueChange)="notif2 = $event" label="I receive merchant order" />
          <app-toggle [value]="notif3" (valueChange)="notif3 = $event" label="There are recommendation for my account" />
        </div>
      </div>
      <div class="flex justify-end mt-8">
        <button class="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">Save</button>
      </div>
    </div>
  `,
})
export class PreferencesComponent {
  currency = 'USD';
  tz = '(GMT-12:00) International Date Line West';
  notif1 = true;
  notif2 = false;
  notif3 = true;
}
