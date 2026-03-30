import React from "react";
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Progress, Tooltip } from "@heroui/react";

export default function MealPlan() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <CalendarIcon className="w-6 h-6 text-[var(--color-primary)]" />
      <div>
      <h1 className="text-[var(--color-text)] text-xl font-semibold">Your week at a glance</h1>
      <p className="text-[var(--color-text)]/70 text-sm">Plan, swap, and track meals with ease</p>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Week 12</Chip>
      <Dropdown>
      <DropdownTrigger>
      <Button className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]">
      <div className="flex items-center gap-2 text-[var(--color-text)] text-sm">
      Select week <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
      </div>
      </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Weeks" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[180px]" }}>
      {["Week 12","Week 13","Week 14"].map((w) => (
      <DropdownItem key={w} className="text-[var(--color-text)]">{w}</DropdownItem>
      ))}
      </DropdownMenu>
      </Dropdown>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Regenerate</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
  {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
  <Card key={d} className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="flex items-center justify-between p-4">
  <h4 className="text-[var(--color-text)] text-base font-semibold">{d}</h4>
  <Badge color="success" className="rounded-full">OK</Badge>
  </CardHeader>
  <CardBody className="px-4 pb-4 space-y-3">
  <div className="flex items-center justify-between">
  <p className="text-[var(--color-text)] text-sm">Breakfast</p>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Swap</Button>
  </div>
  <div className="flex items-center justify-between">
  <p className="text-[var(--color-text)] text-sm">Lunch</p>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Swap</Button>
  </div>
  <div className="flex items-center justify-between">
  <p className="text-[var(--color-text)] text-sm">Dinner</p>
  <Button size="sm" variant="light" className="rounded-full text-[var(--color-primary)]">Swap</Button>
  </div>
  </CardBody>
  <CardFooter className="px-4 pb-4">
  <Button size="sm" className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">View day</Button>
  </CardFooter>
  </Card>
  ))}
  </div>

  <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-4">
  <h4 className="text-[var(--color-text)] text-base font-semibold">Nutrition summary</h4>
  </CardHeader>
  <CardBody className="p-4 space-y-4">
  <div>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">Calories</span>
  <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">1,950/2,100</Chip>
  </div>
  <Progress value={78} className="max-w-full" classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  <div>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">Protein</span>
  <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">110g/140g</Chip>
  </div>
  <Progress value={62} className="max-w-full" classNames={{ indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  <div>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">Carbs</span>
  <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">180g/220g</Chip>
  </div>
  <Progress value={70} className="max-w-full" classNames={{ indicator: "bg-[var(--color-accent)]", track: "bg-[var(--color-border)]" }} />
  </div>
  </CardBody>
  </Card>
  </div>
  </section>
  <section className="w-full flex flex-wrap items-center gap-3 justify-end">
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Export PDF</Button>
  <Button className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">Share</Button>
  <Dropdown>
  <DropdownTrigger>
  <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">More</Button>
  </DropdownTrigger>
  <DropdownMenu aria-label="Plan actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
  <DropdownItem key="reset" className="text-[var(--color-text)]">Reset week</DropdownItem>
  <DropdownItem key="delete" className="text-[var(--color-text)]" color="danger">Delete plan</DropdownItem>
  </DropdownMenu>
  </Dropdown>
  </section>
      </div>
    </div>
  );
}
