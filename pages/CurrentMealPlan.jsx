import React from "react";
import { Accordion, AccordionItem, Badge, Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

export default function CurrentMealPlan() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-5 flex items-center justify-between">
  <h2 className="text-[var(--color-text)] text-xl font-semibold">Current week details</h2>
  <Badge color="primary" className="rounded-full">Active</Badge>
  </CardHeader>
  <CardBody className="p-5">
  <Accordion className="bg-transparent">
  {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
  <AccordionItem key={day} title={day} className="text-[var(--color-text)]">
  <div className="space-y-3">
  <div className="flex items-center justify-between">
  <span className="text-[var(--color-text)] text-sm">Breakfast</span>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Swap</Button>
  </div>
  <div className="flex items-center justify-between">
  <span className="text-[var(--color-text)] text-sm">Lunch</span>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Swap</Button>
  </div>
  <div className="flex items-center justify-between">
  <span className="text-[var(--color-text)] text-sm">Dinner</span>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Swap</Button>
  </div>
  </div>
  </AccordionItem>
  ))}
  </Accordion>
  </CardBody>
  <CardFooter className="p-5 flex justify-end gap-3">
  <Button className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">Print</Button>
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Save changes</Button>
  </CardFooter>
  </Card>
  </section>
      </div>
    </div>
  );
}
