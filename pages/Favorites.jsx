import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@heroui/react";

export default function Favorites() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
  {Array.from({ length: 6 }).map((_, i) => (
  <Card key={i} className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-4 flex items-center justify-between">
  <h4 className="text-[var(--color-text)] text-base font-semibold">Favorite {i + 1}</h4>
  <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">Saved</Chip>
  </CardHeader>
  <CardBody className="px-4 pb-4">
  <p className="text-[var(--color-text)]/80 text-sm">Quick • 20 min • 430 kcal</p>
  </CardBody>
  <CardFooter className="px-4 pb-4">
  <div className="flex gap-2 w-full">
  <Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)] w-full">Open</Button>
  <Button size="sm" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] w-full">Add to plan</Button>
  </div>
  </CardFooter>
  </Card>
  ))}
  </div>
  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-5">
  <h3 className="text-[var(--color-text)] text-lg font-semibold">Collections</h3>
  </CardHeader>
  <CardBody className="p-5 space-y-3">
  {["High-protein dinners","30-min lunches","Veggie delights"].map((c) => (
  <div key={c} className="flex items-center justify-between">
  <span className="text-[var(--color-text)] text-sm">{c}</span>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Open</Button>
  </div>
  ))}
  </CardBody>
  </Card>
  </section>

      </div>
    </div>
  );
}
