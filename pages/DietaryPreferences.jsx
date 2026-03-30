import React from "react";
import { Breadcrumbs, Button, Card, CardBody, Checkbox, Input, Select, SelectItem } from "@heroui/react";
import { Link } from "react-router-dom";

export default function DietaryPreferences() {
    const [diet, setDiet] = React.useState("balanced");
    const [peanuts, setPeanuts] = React.useState(true);
    const [gluten, setGluten] = React.useState(false);
    const [dairy, setDairy] = React.useState(false);
    const [soy, setSoy] = React.useState(false);
    const [other, setOther] = React.useState("");
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full flex flex-col gap-4">
      <Breadcrumbs className="text-[var(--color-text)]">
      <Link to="/" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Home</Link>
      <Link to="/preferences" className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)]">Preferences</Link>
      <span className="text-[var(--color-text)]">Dietary</span>
      </Breadcrumbs>
      <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-5">
      <Select label="Diet" labelPlacement="outside-top" selectedKeys={diet ? [diet] : []} onSelectionChange={(keys) => setDiet(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}>
      {["balanced","keto","vegan","vegetarian","paleo"].map((opt) => (
      <SelectItem key={opt} className="text-[var(--color-text)] capitalize">{opt}</SelectItem>
      ))}
      </Select>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Checkbox isSelected={peanuts} onValueChange={setPeanuts} className="text-[var(--color-text)]">Peanuts</Checkbox>
      <Checkbox isSelected={gluten} onValueChange={setGluten} className="text-[var(--color-text)]">Gluten</Checkbox>
      <Checkbox isSelected={dairy} onValueChange={setDairy} className="text-[var(--color-text)]">Dairy</Checkbox>
      <Checkbox isSelected={soy} onValueChange={setSoy} className="text-[var(--color-text)]">Soy</Checkbox>
      </div>
      <Input label="Other allergens" labelPlacement="outside-top" value={other} onValueChange={setOther} placeholder="Comma-separated" classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
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
