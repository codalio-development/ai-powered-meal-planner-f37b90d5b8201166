import React from "react";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

export default function MealPlanHistory() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
  <Table aria-label="Previous plans" className="backdrop-blur-sm bg-[var(--color-surface)]/80 rounded-2xl border border-[var(--color-border)]">
  <TableHeader>
  <TableColumn className="text-[var(--color-text)]">WEEK</TableColumn>
  <TableColumn className="text-[var(--color-text)]">DAYS</TableColumn>
  <TableColumn className="text-[var(--color-text)]">ITEMS</TableColumn>
  <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
  </TableHeader>
  <TableBody>
  {[
  { id: 1, week: "Week 10", days: 7, items: 52 },
  { id: 2, week: "Week 11", days: 7, items: 49 },
  { id: 3, week: "Week 12", days: 7, items: 48 }
  ].map((r) => (
  <TableRow key={r.id}>
  <TableCell className="text-[var(--color-text)]">{r.week}</TableCell>
  <TableCell className="text-[var(--color-text)]">{r.days}</TableCell>
  <TableCell className="text-[var(--color-text)]">{r.items}</TableCell>
  <TableCell className="text-[var(--color-text)]">
  <div className="flex gap-2">
  <Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">View</Button>
  <Button size="sm" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Recreate</Button>
  </div>
  </TableCell>
  </TableRow>
  ))}
  </TableBody>
  </Table>
  <div className="flex justify-end gap-2 mt-4">
  <Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Previous</Button>
  <Button size="sm" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Next</Button>
  </div>
  </section>
      </div>
    </div>
  );
}
