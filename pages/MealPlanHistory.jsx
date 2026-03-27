import { Button, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React, { useMemo, useState } from "react";

export default function MealPlanHistory() {
    const rows = useMemo(() => Array.from({ length: 22 }).map((_, i) => ({
      week: `2024-W${(i+1).toString().padStart(2,'0')}`,
      calories: `${2000 + (i%5)*50}`,
      tags: ["Balanced", i%2?"High protein":"Low carb"],
    })), []);
    const [page, setPage] = useState(1);
    const pageSize = 6;
    const totalPages = Math.ceil(rows.length / pageSize);
    const paged = useMemo(() => rows.slice((page-1)*pageSize, page*pageSize), [page, rows]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold text-[var(--color-text)]">Previous plans</h2>
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">View current</Button>
      </div>
      <Table aria-label="Meal plan history" className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">WEEK</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CALORIES/DAY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">TAGS</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {paged.map((row) => (
      <TableRow key={row.week}>
      <TableCell className="text-[var(--color-text)]">{row.week}</TableCell>
      <TableCell className="text-[var(--color-text)]">{row.calories}</TableCell>
      <TableCell className="text-[var(--color-text)]">{row.tags.join(', ')}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">View</Button>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      <div className="flex justify-center pt-4">
      <Pagination page={page} total={totalPages} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </section>
      </div>
    </div>
  );
}
