import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardHeader, Checkbox, Radio, RadioGroup, Select, SelectItem } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CookingPreferences() {
    const [cuisine, setCuisine] = useState("");
    const [batchCook, setBatchCook] = useState(true);
    const [leftovers, setLeftovers] = useState(true);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Breadcrumbs className="text-[var(--color-text)]">
      <BreadcrumbItem><Link to="/preferences" className="text-[var(--color-text)]">Preferences</Link></BreadcrumbItem>
      <BreadcrumbItem>Cooking</BreadcrumbItem>
      </Breadcrumbs>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6"><h2 className="text-lg font-semibold text-[var(--color-text)]">Cooking preferences</h2></CardHeader>
      <CardBody className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Select
      label="Primary cuisine"
      selectedKeys={cuisine ? [cuisine] : []}
      onSelectionChange={(keys) => setCuisine(Array.from(keys)[0] || "")}
      classNames={{ trigger: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}
      >
      <SelectItem key="any">Any</SelectItem>
      <SelectItem key="italian">Italian</SelectItem>
      <SelectItem key="thai">Thai</SelectItem>
      <SelectItem key="mexican">Mexican</SelectItem>
      </Select>
      <RadioGroup label={<span className="text-[var(--color-text)]">Spice tolerance</span>} orientation="horizontal">
      <Radio value="mild" className="text-[var(--color-text)]">Mild</Radio>
      <Radio value="medium" className="text-[var(--color-text)]">Medium</Radio>
      <Radio value="hot" className="text-[var(--color-text)]">Hot</Radio>
      </RadioGroup>
      </div>
      <div className="flex flex-wrap gap-4">
      <Checkbox isSelected={batchCook} onValueChange={setBatchCook} className="text-[var(--color-text)]">Batch cooking</Checkbox>
      <Checkbox isSelected={leftovers} onValueChange={setLeftovers} className="text-[var(--color-text)]">Include leftovers</Checkbox>
      </div>
      <div className="flex justify-end">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Save</Button>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
