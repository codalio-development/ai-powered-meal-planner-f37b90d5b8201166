import { Button, Card, CardBody, CardHeader, Checkbox, Input, Select, SelectItem, Switch } from "@heroui/react";
import React, { useState } from "react";

export default function GenerateMealPlan() {
    const [calories, setCalories] = useState("");
    const [diet, setDiet] = useState("");
    const [meals, setMeals] = useState("3");
    const [shoppingList, setShoppingList] = useState(true);
    const [avoidRepeats, setAvoidRepeats] = useState(true);
    const generate = () => {
      console.log("Generate plan", { calories, diet, meals, shoppingList, avoidRepeats });
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Generate a new plan</h2>
      </CardHeader>
      <CardBody className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
      label="Daily calorie target"
      value={calories}
      onValueChange={setCalories}
      placeholder="e.g., 2200"
      classNames={{ inputWrapper: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }}
      />
      <Select
      label="Diet"
      selectedKeys={diet ? [diet] : []}
      onSelectionChange={(keys) => setDiet(Array.from(keys)[0] || "")}
      classNames={{ trigger: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}
      >
      <SelectItem key="any">Any</SelectItem>
      <SelectItem key="vegetarian">Vegetarian</SelectItem>
      <SelectItem key="vegan">Vegan</SelectItem>
      <SelectItem key="keto">Keto</SelectItem>
      </Select>
      <Select
      label="Meals per day"
      selectedKeys={meals ? [meals] : []}
      onSelectionChange={(keys) => setMeals(Array.from(keys)[0] || "")}
      classNames={{ trigger: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}
      >
      <SelectItem key="2">2</SelectItem>
      <SelectItem key="3">3</SelectItem>
      <SelectItem key="4">4</SelectItem>
      </Select>
      <div className="flex items-center gap-6">
      <Checkbox isSelected={shoppingList} onValueChange={setShoppingList} className="text-[var(--color-text)]">Generate grocery list</Checkbox>
      <Switch isSelected={avoidRepeats} onValueChange={setAvoidRepeats} className="text-[var(--color-text)]">Avoid repeats</Switch>
      </div>
      <div className="md:col-span-2 flex justify-end gap-2 pt-2">
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Reset</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onClick={generate}>Generate</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="flex items-center justify-between p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Preview</h3>
      <div className="flex gap-2">
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Regenerate</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Accept plan</Button>
      </div>
      </CardHeader>
      <CardBody className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="p-4 rounded-2xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/80">Day {i + 1}</p>
      <p className="text-sm text-[var(--color-text)] mt-1">Breakfast • Lunch • Dinner</p>
      </div>
      ))}
      </div>
      </CardBody>
      </Card>
      </section>

      </div>
    </div>
  );
}
