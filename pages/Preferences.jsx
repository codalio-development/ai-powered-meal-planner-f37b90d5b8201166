import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, Chip, Switch } from "@heroui/react";

export default function Preferences() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
  <Card className="lg:col-span-2 bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-5 flex items-center justify-between">
  <h3 className="text-[var(--color-text)] text-lg font-semibold">Overview</h3>
  <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Updated recently</Chip>
  </CardHeader>
  <CardBody className="p-5 space-y-3">
  <p className="text-[var(--color-text)]/80 text-sm">Diet: Balanced</p>
  <p className="text-[var(--color-text)]/80 text-sm">Allergens: Peanuts</p>
  <p className="text-[var(--color-text)]/80 text-sm">Dislikes: Mushrooms, Olives</p>
  <div className="flex gap-3 pt-2">
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Edit dietary</Button>
  <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Edit cooking</Button>
  </div>
  </CardBody>
  </Card>
  <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-5">
  <h3 className="text-[var(--color-text)] text-lg font-semibold">Quick toggles</h3>
  </CardHeader>
  <CardBody className="p-5 space-y-4">
  <Switch className="text-[var(--color-text)]" color="secondary">Vegetarian only</Switch>
  <Switch className="text-[var(--color-text)]" color="secondary">Low-carb focus</Switch>
  <Checkbox className="text-[var(--color-text)]">Include leftovers</Checkbox>
  <Checkbox className="text-[var(--color-text)]">Avoid spicy</Checkbox>
  </CardBody>
  </Card>
  </section>
      </div>
    </div>
  );
}
