import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Chip, Input, Select, SelectItem } from "@heroui/react";

export default function Search() {
    const [query, setQuery] = React.useState("");
    const [diet, setDiet] = React.useState("any");
    const [quick, setQuick] = React.useState(false);
    const [budget, setBudget] = React.useState(false);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2">
      <Input label="Search" labelPlacement="outside-top" value={query} onValueChange={setQuery} placeholder="Find recipes..." classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />} />
      </div>
      <Select label="Diet" labelPlacement="outside-top" selectedKeys={diet ? [diet] : []} onSelectionChange={(keys) => setDiet(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}>
      {["any","balanced","keto","vegan","vegetarian"].map((opt) => (
      <SelectItem key={opt} className="text-[var(--color-text)] capitalize">{opt}</SelectItem>
      ))}
      </Select>
      <div className="flex items-end gap-4">
      <Checkbox isSelected={quick} onValueChange={setQuick} className="text-[var(--color-text)]">Under 30 min</Checkbox>
      <Checkbox isSelected={budget} onValueChange={setBudget} className="text-[var(--color-text)]">Budget</Checkbox>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
      <Card key={i} className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-4">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Result {i + 1}</h4>
      </CardHeader>
      <CardBody className="px-4 pb-4">
      <p className="text-[var(--color-text)]/80 text-sm">Macro-friendly • 30 min • 500 kcal</p>
      </CardBody>
      <CardFooter className="px-4 pb-4">
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] w-full">View recipe</Button>
      </CardFooter>
      </Card>
      ))}
      </div>
      </section>

      </div>
    </div>
  );
}
