import React, { useState, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export default function CollapsibleSection({ title, children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4">
      <button
        className="w-full text-left px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 font-semibold"
        onClick={() => setOpen(o => !o)}
      >
        {title}
      </button>
      {open && (
        <div className="p-4 bg-white border rounded-b shadow">
          {children}
        </div>
      )}
    </div>
  );
} 