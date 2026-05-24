import { useState } from 'react';

const PAGES = [1, 2, 3, 4];

export default function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex items-center justify-end gap-3 mt-6 text-md font-medium">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="flex items-center gap-2 px-2 text-ink-muted"
      >
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path d="M6 1L1 5.5L6 10" stroke="#718ebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Previous</span>
      </button>
      {PAGES.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className="w-[35px] h-[35px] rounded-lg flex items-center justify-center"
          style={
            page === p
              ? { background: '#1814f3', color: '#fff' }
              : { color: '#718ebf' }
          }
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => setPage((p) => Math.min(PAGES.length, p + 1))}
        className="flex items-center gap-2 px-2 text-ink-muted"
      >
        <span>Next</span>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
          <path d="M1 1L6 5.5L1 10" stroke="#718ebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
