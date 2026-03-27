import { CalendarIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Chip, Progress, Tooltip } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function MealPlan() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="flex items-center justify-between p-6">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 flex items-center justify-center">
      <CalendarIcon className="w-5 h-5 text-[var(--color-primary)]" />
      </div>
      <div>
      <h2 className="text-xl font-semibold text-[var(--color-text)]">Your weekly plan</h2>
      <div className="flex gap-2 mt-1">
      <Chip size="sm" variant="flat" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Balanced</Chip>
      <Chip size="sm" variant="flat" className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">High protein</Chip>
      </div>
      </div>
      </div>
      <Link to="/meal-plan/generate">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Generate new plan</Button>
      </Link>
      </CardHeader>
      </Card>
      </section>
  <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
      {days.map((day) => (
      <Card key={day} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <CardHeader className="flex items-center justify-between p-4">
      <h3 className="text-sm font-semibold text-[var(--color-text)]">{day}</h3>
      <Tooltip content={<span className="text-[var(--color-text)] text-sm">Replace meals</span>}>
      <Button isIconOnly size="sm" variant="light" className="rounded-full text-[var(--color-text)] hover:bg-[var(--color-primary)]/10">
      <PencilIcon className="w-4 h-4" />
      </Button>
      </Tooltip>
      </CardHeader>
      <CardBody className="p-4 space-y-2">
      <div className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs font-medium text-[var(--color-text)]">Breakfast</p>
      <p className="text-sm text-[var(--color-text)]/80 truncate">Oatmeal with berries</p>
      </div>
      <div className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs font-medium text-[var(--color-text)]">Lunch</p>
      <p className="text-sm text-[var(--color-text)]/80 truncate">Chicken quinoa bowl</p>
      </div>
      <div className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs font-medium text-[var(--color-text)]">Dinner</p>
      <p className="text-sm text-[var(--color-text)]/80 truncate">Salmon with veggies</p>
      </div>
      </CardBody>
      </Card>
      ))}
      </div>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Nutrition insights</h3>
      </CardHeader>
      <CardBody className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
      <div>
      <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-[var(--color-text)]">Calories</span>
      <span className="text-sm text-[var(--color-text)]/80">1,950 / 2,200</span>
      </div>
      <Progress value={88} aria-label="Calories" classNames={{indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]"}} />
      </div>
      <div>
      <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-[var(--color-text)]">Protein</span>
      <span className="text-sm text-[var(--color-text)]/80">110g / 130g</span>
      </div>
      <Progress value={72} aria-label="Protein" classNames={{indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]"}} />
      </div>
      <div>
      <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-[var(--color-text)]">Carbs</span>
      <span className="text-sm text-[var(--color-text)]/80">210g / 250g</span>
      </div>
      <Progress value={64} aria-label="Carbs" classNames={{indicator: "bg-[var(--color-accent-light)]", track: "bg-[var(--color-border)]"}} />
      </div>
      </div>
      <div className="space-y-3">
      <h4 className="text-sm font-semibold text-[var(--color-text)]">Highlights</h4>
      <div className="flex flex-wrap gap-2">
      <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">High protein</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">Low sugar</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Fiber-rich</Chip>
      </div>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
