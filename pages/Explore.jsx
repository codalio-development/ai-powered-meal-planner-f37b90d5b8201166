import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Chip, Input, Select, SelectItem } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Explore() {
    const [query, setQuery] = React.useState("");
    const [cuisine, setCuisine] = React.useState("any");
    const [quick, setQuick] = React.useState(false);
    const [budget, setBudget] = React.useState(false);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full flex flex-col gap-4">
      <Breadcrumbs className="text-[var(--color-text)]">
      <Link to="/" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Home</Link>
      <span className="text-[var(--color-text)]">Explore</span>
      </Breadcrumbs>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2">
      <Input label="Search" labelPlacement="outside-top" value={query} onValueChange={setQuery} placeholder="Search recipes..." classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />} />
      </div>
      <Select label="Cuisine" labelPlacement="outside-top" selectedKeys={cuisine ? [cuisine] : []} onSelectionChange={(keys) => setCuisine(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}>
      {["any","italian","mexican","indian","thai","mediterranean"].map((opt) => (
      <SelectItem key={opt} className="text-[var(--color-text)] capitalize">{opt}</SelectItem>
      ))}
      </Select>
      <div className="flex items-end gap-4">
      <Checkbox isSelected={quick} onValueChange={setQuick} className="text-[var(--color-text)]">Under 30 min</Checkbox>
      <Checkbox isSelected={budget} onValueChange={setBudget} className="text-[var(--color-text)]">Budget</Checkbox>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Filters</Chip>
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => {}}>Apply</Button>
      </div>
      </section>
  <section className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {Array.from({ length: 9 }).map((_, i) => (
  <Card key={i} className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-all">
  <CardHeader className="p-4 flex items-center justify-between">
  <h4 className="text-[var(--color-text)] text-base font-semibold">Tasty Recipe {i + 1}</h4>
  <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">4.6★</Chip>
  </CardHeader>
  <CardBody className="px-4 pb-4 space-y-2">
  <p className="text-[var(--color-text)]/80 text-sm">High-protein • 25 min • 420 kcal</p>
  <div className="flex gap-2">
  <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Chicken</Chip>
  <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">Gluten-free</Chip>
  </div>
  </CardBody>
  <CardFooter className="px-4 pb-4">
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] w-full">View recipe</Button>
  </CardFooter>
  </Card>
  ))}
  </div>
  <div className="flex justify-center gap-2 mt-6">
  <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Previous</Button>
  <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Next</Button>
  </div>
  </section>
      )
      </div>
    </div>
  );
}
