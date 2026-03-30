import React from "react";
import { Breadcrumbs, Button, Card, CardBody, Checkbox, Input, Select, SelectItem, Switch } from "@heroui/react";
import { Link } from "react-router-dom";

export default function CookingPreferences() {
    const [skill, setSkill] = React.useState("beginner");
    const [prep, setPrep] = React.useState("30");
    const [onePot, setOnePot] = React.useState(true);
    const [batch, setBatch] = React.useState(false);
    const [airFryer, setAirFryer] = React.useState(false);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full flex flex-col gap-4">
      <Breadcrumbs className="text-[var(--color-text)]">
      <Link to="/" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Home</Link>
      <Link to="/preferences" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Preferences</Link>
      <span className="text-[var(--color-text)]">Cooking</span>
      </Breadcrumbs>
      <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Select label="Skill level" labelPlacement="outside-top" selectedKeys={skill ? [skill] : []} onSelectionChange={(keys) => setSkill(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}>
      {["beginner","intermediate","advanced"].map((opt) => (
      <SelectItem key={opt} className="text-[var(--color-text)] capitalize">{opt}</SelectItem>
      ))}
      </Select>
      <Input label="Max prep time (min)" labelPlacement="outside-top" value={prep} onValueChange={setPrep} type="number" classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Checkbox isSelected={onePot} onValueChange={setOnePot} className="text-[var(--color-text)]">Prefer one-pot meals</Checkbox>
      <Checkbox isSelected={batch} onValueChange={setBatch} className="text-[var(--color-text)]">Enable batch cooking</Checkbox>
      </div>
      <Switch isSelected={airFryer} onValueChange={setAirFryer} color="secondary" className="text-[var(--color-text)]">I have an air fryer</Switch>
      <div className="flex justify-end gap-3">
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Cancel</Button>
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Save</Button>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
