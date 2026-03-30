import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@heroui/react";

export default function Recommended() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {Array.from({ length: 9 }).map((_, i) => (
  <Card key={i} className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-all">
  <CardHeader className="p-4 flex items-center justify-between">
  <h4 className="text-[var(--color-text)] text-base font-semibold">Recommended Recipe {i + 1}</h4>
  <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">High score</Chip>
  </CardHeader>
  <CardBody className="px-4 pb-4 space-y-2">
  <p className="text-[var(--color-text)]/80 text-sm">Tailored to your diet and past likes.</p>
  </CardBody>
  <CardFooter className="px-4 pb-4">
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] w-full">View recipe</Button>
  </CardFooter>
  </Card>
  ))}
  </div>
  <div className="flex justify-center gap-2 mt-6">
  <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Previous</Button>
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Next</Button>
  </div>
  </section>
      </div>
    </div>
  );
}
