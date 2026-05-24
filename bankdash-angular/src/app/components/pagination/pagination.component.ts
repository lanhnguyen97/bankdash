import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-end gap-3 mt-6 text-md font-medium">
      <button (click)="page = Math.max(1, page - 1)" class="flex items-center gap-2 px-2 text-ink-muted">
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path d="M6 1L1 5.5L6 10" stroke="#718ebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Previous</span>
      </button>
      <button
        *ngFor="let p of pages"
        (click)="page = p"
        class="w-[35px] h-[35px] rounded-lg flex items-center justify-center"
        [style.background]="page === p ? '#1814f3' : null"
        [style.color]="page === p ? '#fff' : '#718ebf'"
      >
        {{ p }}
      </button>
      <button (click)="page = Math.min(pages.length, page + 1)" class="flex items-center gap-2 px-2 text-ink-muted">
        <span>Next</span>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path d="M1 1L6 5.5L1 10" stroke="#718ebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  `,
})
export class PaginationComponent {
  pages = [1, 2, 3, 4];
  page = 1;
  Math = Math;
}
