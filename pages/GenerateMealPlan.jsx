import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, Chip, Input, Select, SelectItem, Switch } from "@heroui/react";

export default function GenerateMealPlan() {
    const [calories, setCalories] = React.useState("");
    const [diet, setDiet] = React.useState("");
    const [includeBreakfast, setIncludeBreakfast] = React.useState(true);
    const [includeSnacks, setIncludeSnacks] = React.useState(false);
    const [budgetMode, setBudgetMode] = React.useState(false);
    const handleReset = () => {
      setCalories("");
      setDiet("");
      setIncludeBreakfast(true);
      setIncludeSnacks(false);
      setBudgetMode(false);
    };
    const handleGenerate = () => {
      console.log({ calories, diet, includeBreakfast, includeSnacks, budgetMode });
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Input label="Daily calories" labelPlacement="outside-top" value={calories} onValueChange={setCalories} type="number" classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} placeholder="e.g., 2100" />
      <Select label="Diet" labelPlacement="outside-top" selectedKeys={diet ? [diet] : []} onSelectionChange={(keys) => setDiet(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}>
      {['balanced','keto','vegan','vegetarian','paleo'].map((opt) => (
      <SelectItem key={opt} className="text-[var(--color-text)] capitalize">{opt}</SelectItem>
      ))}
      </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Checkbox isSelected={includeBreakfast} onValueChange={setIncludeBreakfast} className="text-[var(--color-text)]">Include breakfast</Checkbox>
      <Checkbox isSelected={includeSnacks} onValueChange={setIncludeSnacks} className="text-[var(--color-text)]">Include snacks</Checkbox>
      </div>
      <div className="flex items-center justify-between">
      <Switch isSelected={budgetMode} onValueChange={setBudgetMode} color="secondary" className="text-[var(--color-text)]">Budget mode</Switch>
      <div className="flex gap-2">
      <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Smart planning</Chip>
      <Chip className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Seasonal</Chip>
      </div>
      </div>
      <div className="flex justify-end gap-3 pt-2">
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]" onPress={handleReset}>Reset</Button>
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]" onPress={handleGenerate}>Generate plan</Button>
      </div>
      </CardBody>
      </Card>
      <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-3">
      <h3 className="text-[var(--color-text)] text-lg font-semibold">Tips</h3>
      <p className="text-[var(--color-text)]/80 text-sm">Start with balanced diet, then adjust macros based on your goals.</p>
      <p className="text-[var(--color-text)]/80 text-sm">Use budget mode to prioritize affordable ingredients.</p>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
  <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
  <CardHeader className="p-5 flex items-center justify-between">
  <h3 className="text-[var(--color-text)] text-lg font-semibold">Last generation</h3>
  <Chip className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Mar 21</Chip>
  </CardHeader>
  <CardBody className="p-5 flex items-center justify-between">
  <p className="text-[var(--color-text)]/80 text-sm">7 days • 21 meals • Grocery items: 48</p>
  <div className="flex gap-3">
  <Button size="sm" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">View</Button>
  <Button size="sm" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Regenerate</Button>
  </div>
  </CardBody>
  </Card>
  </section>

      </div>
    </div>
  );
}
