import React from "react";
import { Badge, Button, Card, CardBody, Checkbox, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

export default function GroceryList() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
  <CardBody className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  <div>
  <h2 className="text-[var(--color-text)] text-xl font-semibold">Your shopping list</h2>
  <p className="text-[var(--color-text)]/70 text-sm">Consolidated from your current plan</p>
  </div>
  <div className="flex items-center gap-3">
  <Select label="Week" labelPlacement="outside" selectedKeys={["current"]} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12 min-w-[160px]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
  <SelectItem key="current">Current</SelectItem>
  <SelectItem key="next">Next</SelectItem>
  </Select>
  <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">48 items</Chip>
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Export</Button>
  </div>
  </CardBody>
  </Card>
  </section>
  <section className="w-full flex flex-col gap-4">
  <div className="flex justify-between items-center">
  <div className="flex items-center gap-3">
  <Checkbox className="text-[var(--color-text)]">Select all</Checkbox>
  <Badge color="success" className="rounded-full">Synced</Badge>
  </div>
  <Dropdown>
  <DropdownTrigger>
  <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Actions</Button>
  </DropdownTrigger>
  <DropdownMenu aria-label="List actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
  <DropdownItem key="mark">Mark purchased</DropdownItem>
  <DropdownItem key="clear" color="danger">Clear checked</DropdownItem>
  </DropdownMenu>
  </Dropdown>
  </div>
  <Table aria-label="Grocery items" className="backdrop-blur-sm bg-[var(--color-surface)]/80 rounded-2xl border border-[var(--color-border)]">
  <TableHeader>
  <TableColumn className="text-[var(--color-text)]">ITEM</TableColumn>
  <TableColumn className="text-[var(--color-text)]">QTY</TableColumn>
  <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
  </TableHeader>
  <TableBody>
  {[{name:'Chicken breast',qty:'600g',status:'Needed'},{name:'Lemon',qty:'1',status:'Needed'},{name:'Olive oil',qty:'2 tbsp',status:'Have'}].map((r, idx) => (
  <TableRow key={idx}>
  <TableCell className="text-[var(--color-text)]"><div className="flex items-center gap-2"><Checkbox className="text-[var(--color-text)]" />{r.name}</div></TableCell>
  <TableCell className="text-[var(--color-text)]">{r.qty}</TableCell>
  <TableCell className="text-[var(--color-text)]"><Badge color={r.status === 'Have' ? 'success' : 'warning'} className="rounded-full">{r.status}</Badge></TableCell>
  </TableRow>
  ))}
  </TableBody>
  </Table>
  </section>
      </div>
    </div>
  );
}
