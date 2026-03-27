import { Accordion, AccordionItem, Badge, Button, Card, CardBody, Checkbox } from "@heroui/react";
import React, { useState } from "react";

export default function GroceryList() {
    const [items, setItems] = useState([
      { name: 'Bananas', aisle: 'Produce', done: false },
      { name: 'Spinach', aisle: 'Produce', done: false },
      { name: 'Chicken breast', aisle: 'Meat', done: false },
      { name: 'Greek yogurt', aisle: 'Dairy', done: false },
      { name: 'Olive oil', aisle: 'Pantry', done: false },
    ]);
    const grouped = Object.values(items.reduce((acc, it) => {
      acc[it.aisle] = acc[it.aisle] || { name: it.aisle, items: [] };
      acc[it.aisle].items.push(it);
      return acc;
    }, {}));
    const toggleItem = (aisle, index, value) => {
      setItems((prev) => {
        const next = prev.slice();
        let counter1 = -1;
        for (let i = 0; i < next.length; i++) if (next[i].aisle === aisle) { counter1++; if (counter1 === index) { next[i] = { ...next[i], done: value }; break; } }
        return next;
      });
    };
    const removeItem = (aisle, index) => {
      setItems((prev) => {
        let counter2 = -1;
        return prev.filter((it) => (it.aisle !== aisle) || (++counter2 !== index));
      });
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <div className="flex items-center justify-between mb-3">
      <h1 className="text-xl font-semibold text-[var(--color-text)]">Your shopping list</h1>
      <div className="flex gap-2">
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onClick={() => setItems(items.map(i => ({...i, done: false})))}>Clear purchased</Button>
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Export</Button>
      </div>
      </div>
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4">
      <Accordion className="bg-transparent">
      {grouped.map((group) => (
      <AccordionItem key={group.name} title={<span className="text-[var(--color-text)]">{group.name} <Badge className="ml-2" color="primary">{group.items.length}</Badge></span>} className="text-[var(--color-text)]">
      <div className="space-y-2">
      {group.items.map((it, idx) => (
      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <Checkbox isSelected={it.done} onValueChange={(v) => toggleItem(group.name, idx, v)} className="text-[var(--color-text)]">{it.name}</Checkbox>
      <Button size="sm" variant="light" className="rounded-xl text-[var(--color-text)] hover:bg-[var(--color-accent)]/10" onClick={() => removeItem(group.name, idx)}>Remove</Button>
      </div>
      ))}
      </div>
      </AccordionItem>
      ))}
      </Accordion>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
