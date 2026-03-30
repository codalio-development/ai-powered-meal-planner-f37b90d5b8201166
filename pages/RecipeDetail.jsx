import { useParams } from "react-router-dom";
import React from "react";
import { Badge, Button, Card, CardBody, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Progress, Switch, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@heroui/react";

export default function RecipeDetail() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full flex flex-col gap-4">
  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
  <CardBody className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  <div className="space-y-2">
  <h1 className="text-[var(--color-text)] text-2xl font-semibold">Grilled Lemon Chicken</h1>
  <div className="flex flex-wrap gap-2">
  <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">25 min</Chip>
  <Chip className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">520 kcal</Chip>
  <Chip className="rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">High protein</Chip>
  </div>
  </div>
  <div className="flex items-center gap-3">
  <Switch size="sm" className="text-[var(--color-text)]" color="secondary">Favorite</Switch>
  <Dropdown>
  <DropdownTrigger>
  <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Actions</Button>
  </DropdownTrigger>
  <DropdownMenu aria-label="Recipe actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
  <DropdownItem key="add">Add to plan</DropdownItem>
  <DropdownItem key="save">Save to collection</DropdownItem>
  <DropdownItem key="share">Share</DropdownItem>
  </DropdownMenu>
  </Dropdown>
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Cook now</Button>
  </div>
  </CardBody>
  </Card>
  </section>
  <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">
  <Table aria-label="Ingredients" className="backdrop-blur-sm bg-[var(--color-surface)]/80 rounded-2xl border border-[var(--color-border)]">
  <TableHeader>
  <TableColumn className="text-[var(--color-text)]">INGREDIENT</TableColumn>
  <TableColumn className="text-[var(--color-text)]">AMOUNT</TableColumn>
  <TableColumn className="text-[var(--color-text)]">NOTES</TableColumn>
  </TableHeader>
  <TableBody>
  {[{name:'Chicken breast',amount:'600g',note:'sliced'},{name:'Lemon',amount:'1',note:'zested'},{name:'Olive oil',amount:'2 tbsp',note:'extra virgin'}].map((ing, idx) => (
  <TableRow key={idx}>
  <TableCell className="text-[var(--color-text)]">{ing.name}</TableCell>
  <TableCell className="text-[var(--color-text)]">{ing.amount}</TableCell>
  <TableCell className="text-[var(--color-text)]">
  <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{ing.note}</Chip>
  </TableCell>
  </TableRow>
  ))}
  </TableBody>
  </Table>
  </div>
  <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
  <CardBody className="p-6 space-y-4">
  <h3 className="text-[var(--color-text)] text-lg font-semibold">Nutrition facts</h3>
  <div>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">Calories</span>
  <span className="text-[var(--color-text)] text-sm">520</span>
  </div>
  <Progress value={52} className="max-w-full" classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  <div>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">Protein</span>
  <span className="text-[var(--color-text)] text-sm">42g</span>
  </div>
  <Progress value={84} className="max-w-full" classNames={{ indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  <div>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">Carbs</span>
  <span className="text-[var(--color-text)] text-sm">35g</span>
  </div>
  <Progress value={58} className="max-w-full" classNames={{ indicator: "bg-[var(--color-accent)]", track: "bg-[var(--color-border)]" }} />
  </div>
  </CardBody>
  </Card>
  </section>
      </div>
    </div>
  );
}
