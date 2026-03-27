import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardHeader, Tooltip } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CurrentMealPlan() {
    const summary = [
      { label: 'Avg. calories/day', value: '2,050' },
      { label: 'Protein/day', value: '120g' },
      { label: 'Fiber/day', value: '28g' },
    ];
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Breadcrumbs className="text-[var(--color-text)]">
      <BreadcrumbItem><Link to="/" className="text-[var(--color-text)]">Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/meal-plan" className="text-[var(--color-text)]">Meal Plan</Link></BreadcrumbItem>
      <BreadcrumbItem>Current</BreadcrumbItem>
      </Breadcrumbs>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="flex items-center justify-between p-6">
      <div>
      <h2 className="text-lg font-semibold text-[var(--color-text)]">This week</h2>
      <p className="text-sm text-[var(--color-text)]/80">7 days • 21 meals planned</p>
      </div>
      <div className="flex gap-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Add all to list</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Regenerate</Button>
      </div>
      </CardHeader>
      <CardBody className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {summary.map((s) => (
      <div key={s.label} className="p-4 rounded-2xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/80">{s.label}</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">{s.value}</p>
      </div>
      ))}
      </div>
      </CardBody>
      </Card>
      </section>

  <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {days.map((d) => (
      <Card key={d} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4 space-y-3">
      <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold text-[var(--color-text)]">{d}</h3>
      <div className="flex gap-2">
      <Tooltip content={<span className="text-[var(--color-text)] text-xs">Swap meal</span>}>
      <Button size="sm" variant="light" className="rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10">Replace</Button>
      </Tooltip>
      <Tooltip content={<span className="text-[var(--color-text)] text-xs">View recipe</span>}>
      <Button size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">View</Button>
      </Tooltip>
      </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
      {['Breakfast','Lunch','Dinner'].map((meal) => (
      <div key={meal} className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs font-medium text-[var(--color-text)]">{meal}</p>
      <p className="text-sm text-[var(--color-text)]/80 truncate">Sample {meal} idea</p>
      </div>
      ))}
      </div>
      </CardBody>
      </Card>
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}
