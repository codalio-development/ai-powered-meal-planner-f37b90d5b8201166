import { Button, Card, CardBody, CardHeader, Checkbox, Chip, Switch } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Preferences() {
    const [autoGenerate, setAutoGenerate] = useState(true);
    const [includeSnacks, setIncludeSnacks] = useState(false);
    const [budgetFriendly, setBudgetFriendly] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [pushAlerts, setPushAlerts] = useState(false);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6 flex items-center justify-between">
      <div>
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Tune your experience</h2>
      <p className="text-sm text-[var(--color-text)]/80">Manage dietary needs and cooking preferences</p>
      </div>
      <div className="flex gap-2">
      <Link to="/preferences/dietary"><Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Dietary</Button></Link>
      <Link to="/preferences/disliked"><Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Disliked</Button></Link>
      <Link to="/preferences/cooking"><Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Cooking</Button></Link>
      </div>
      </CardHeader>
      <CardBody className="p-6">
      <div className="flex flex-wrap gap-2">
      <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Vegetarian</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">Mediterranean</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Low sugar</Chip>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Switch isSelected={autoGenerate} onValueChange={setAutoGenerate} className="text-[var(--color-text)]">Auto-generate weekly plan</Switch>
      <Switch isSelected={includeSnacks} onValueChange={setIncludeSnacks} className="text-[var(--color-text)]">Include snacks</Switch>
      <Switch isSelected={budgetFriendly} onValueChange={setBudgetFriendly} className="text-[var(--color-text)]">Budget-friendly</Switch>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
      <Checkbox isSelected={emailUpdates} onValueChange={setEmailUpdates} className="text-[var(--color-text)]">Email updates</Checkbox>
      <Checkbox isSelected={pushAlerts} onValueChange={setPushAlerts} className="text-[var(--color-text)]">Push alerts</Checkbox>
      <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Changes saved automatically</Chip>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
