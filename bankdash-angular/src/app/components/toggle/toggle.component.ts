import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <label class="flex items-center gap-4 cursor-pointer">
      <button
        type="button"
        (click)="onToggle()"
        class="shrink-0 relative transition-colors"
        [style.width.px]="60"
        [style.height.px]="30"
        [style.borderRadius.px]="9999"
        [style.background]="value ? '#16dbcc' : '#e0e0e0'"
      >
        <span
          class="absolute rounded-full bg-white transition-all"
          [style.width.px]="22"
          [style.height.px]="22"
          [style.top.px]="4"
          [style.left.px]="value ? 34 : 4"
        ></span>
      </button>
      <span class="text-base text-ink">{{ label }}</span>
    </label>
  `,
})
export class ToggleComponent {
  @Input() value = false;
  @Input() label = '';
  @Output() valueChange = new EventEmitter<boolean>();
  onToggle() {
    this.valueChange.emit(!this.value);
  }
}
