
        import React, { useState } from "react";
import { Card, CardBody, Input, Select, SelectItem, Checkbox, Chip, Button } from "@heroui/react";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
        export default function FilterBar({}) {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [onlyQuick, setOnlyQuick] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const apply = () => {
  const filters = [];
  if (search) filters.push(`search:${search}`);
  if (cuisine) filters.push(`cuisine:${cuisine}`);
  if (onlyQuick) filters.push("quick");
  if (vegetarian) filters.push("vegetarian");
  setActiveFilters(filters);
  };

  const clearAll = () => {
  setSearch("");
  setCuisine("");
  setOnlyQuick(false);
  setVegetarian(false);
  setActiveFilters([]);
  };

  const removeFilter = (f) => {
  if (f.startsWith('search:')) setSearch("");
  else if (f.startsWith('cuisine:')) setCuisine("");
  else if (f === 'quick') setOnlyQuick(false);
  else if (f === 'vegetarian') setVegetarian(false);
  setActiveFilters((prev) => prev.filter((x) => x !== f));
  };
        return (
            <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
    <CardBody className="flex flex-col gap-4 p-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    <Input
    label="Search"
    value={search}
    onValueChange={setSearch}
    placeholder="Search recipes..."
    startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
    classNames={{
    inputWrapper: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]",
    label: "text-[var(--color-text)]"
    }}
    />
    <Select
    label="Cuisine"
    selectedKeys={cuisine ? [cuisine] : []}
    onSelectionChange={(keys) => setCuisine(Array.from(keys)[0] || "")}
    classNames={{
    trigger: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
    popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl",
    label: "text-[var(--color-text)]"
    }}
    >
    <SelectItem key="any">Any</SelectItem>
    <SelectItem key="italian">Italian</SelectItem>
    <SelectItem key="mexican">Mexican</SelectItem>
    <SelectItem key="indian">Indian</SelectItem>
    </Select>
    <div className="flex items-center gap-4">
    <Checkbox isSelected={onlyQuick} onValueChange={setOnlyQuick} className="text-[var(--color-text)]">Quick & easy</Checkbox>
    <Checkbox isSelected={vegetarian} onValueChange={setVegetarian} className="text-[var(--color-text)]">Vegetarian</Checkbox>
    </div>
    </div>

    <div className="flex flex-wrap items-center gap-2">
    {activeFilters.map((f) => (
    <Chip key={f} variant="flat" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
    <span className="text-xs text-[var(--color-primary)]">{f}</span>
    <button onClick={() => removeFilter(f)} className="ml-1">
    <XMarkIcon className="w-4 h-4 text-[var(--color-primary)]" />
    </button>
    </Chip>
    ))}
    {activeFilters.length === 0 && (
    <div className="flex items-center gap-2 text-[var(--color-text)]">
    <AdjustmentsHorizontalIcon className="w-4 h-4 text-[var(--color-text)]" />
    <span className="text-sm text-[var(--color-text)]">No filters applied</span>
    </div>
    )}
    <div className="ml-auto flex gap-2">
    <Button size="sm" onClick={apply} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Apply</Button>
    <Button size="sm" variant="bordered" onClick={clearAll} className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Clear</Button>
    </div>
    </div>
    </CardBody>
    </Card>
        );
        }
