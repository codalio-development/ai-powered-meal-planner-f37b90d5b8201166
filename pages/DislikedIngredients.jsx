import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardHeader, Chip, Input } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DislikedIngredients() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState(["cilantro", "anchovies"]);
    const add = () => {
      if (!input.trim()) return;
      setItems((prev) => Array.from(new Set([...prev, input.trim().toLowerCase()])));
      setInput("");
    };
    const remove = (i) => setItems((prev) => prev.filter((_, idx) => idx !== i));
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Breadcrumbs className="text-[var(--color-text)]">
      <BreadcrumbItem><Link to="/preferences" className="text-[var(--color-text)]">Preferences</Link></BreadcrumbItem>
      <BreadcrumbItem>Disliked</BreadcrumbItem>
      </Breadcrumbs>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6"><h2 className="text-lg font-semibold text-[var(--color-text)]">Manage disliked ingredients</h2></CardHeader>
      <CardBody className="p-6 space-y-4">
      <div className="flex gap-2">
      <Input
      label="Add ingredient"
      value={input}
      onValueChange={setInput}
      placeholder="e.g., cilantro"
      classNames={{ inputWrapper: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }}
      />
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onClick={add}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2">
      {items.map((it, i) => (
      <Chip key={i} variant="flat" className="rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
      <span className="text-xs text-[var(--color-accent)]">{it}</span>
      <button onClick={() => remove(i)} className="ml-1 text-[var(--color-accent)]">×</button>
      </Chip>
      ))}
      </div>
      </CardBody>
      </Card>
      </section>

      </div>
    </div>
  );
}
