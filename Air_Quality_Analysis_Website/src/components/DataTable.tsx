import React from 'react';

type Props = {
  columns: string[];
  data: Array<Record<string, any>>;
};

export default function DataTable({ columns, data }: Props) {
  return (
    <table className="min-w-full bg-white border rounded">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col} className="border px-4 py-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => (
              <td key={col} className="border px-4 py-2">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
} 