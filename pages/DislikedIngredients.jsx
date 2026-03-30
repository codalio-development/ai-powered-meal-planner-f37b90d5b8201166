import React from "react";
import { Breadcrumbs, Button, Card, CardBody, Chip, Input } from "@heroui/react";
import { Link } from "react-router-dom";

export default function DislikedIngredients() {
    const [term, setTerm] = React.useState("");
    const [items, setItems] = React.useState(["mushrooms","olives"]);
    const addItem = () => {
      const v = term.trim();
      if (!v) return;
      setItems((arr) => Array.from(new Set([...arr, v])));
      setTerm("");
    };
    const removeItem = (idx) => setItems((arr) => arr.filter((_, i) => i !== idx));
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full flex flex-col gap-4">
      <Breadcrumbs className="text-[var(--color-text)]">
      <Link to="/" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Home</Link>
      <Link to="/preferences" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Preferences</Link>
      <span className="text-[var(--color-text)]">Disliked</span>
      </Breadcrumbs>
      <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-4">
      <div className="flex items-end gap-3">
      <Input label="Add ingredient" labelPlacement="outside-top" value={term} onValueChange={setTerm} placeholder="e.g., cilantro" classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]" onPress={addItem}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2">
      {items.map((i, idx) => (
      <Chip key={idx} onClose={() => removeItem(idx)} className="rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">{i}</Chip>
      ))}
      </div>
      <div className="flex justify-end">
      <Button className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)]">Save</Button>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
