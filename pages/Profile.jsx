import { Avatar, Button, Card, CardBody, CardHeader, Chip, Input, Switch } from "@heroui/react";
import React, { useState } from "react";

export default function Profile() {
    const [name, setName] = useState("Jane Doe");
    const [email, setEmail] = useState("jane@example.com");
    const [emailOptIn, setEmailOptIn] = useState(true);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <CardBody className="p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
      <Avatar name="JD" className="w-16 h-16" />
      <div>
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Jane Doe</h2>
      <p className="text-sm text-[var(--color-text)]/80">jane@example.com</p>
      </div>
      </div>
      <div className="flex gap-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Upload photo</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Edit</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Account details form */}
      <Card className="lg:col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6"><h3 className="text-lg font-semibold text-[var(--color-text)]">Account details</h3></CardHeader>
      <CardBody className="p-6 space-y-4">
      <Input label="Name" value={name} onValueChange={setName} classNames={{ inputWrapper: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Input label="Email" value={email} onValueChange={setEmail} classNames={{ inputWrapper: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <div className="flex items-center justify-between">
      <span className="text-sm text-[var(--color-text)]">Email notifications</span>
      <Switch isSelected={emailOptIn} onValueChange={setEmailOptIn} className="text-[var(--color-text)]">Enabled</Switch>
      </div>
      <div className="flex justify-end">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Save changes</Button>
      </div>
      </CardBody>
      </Card>

      {/* Preferences summary */}
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6"><h3 className="text-lg font-semibold text-[var(--color-text)]">Preferences</h3></CardHeader>
      <CardBody className="p-6">
      <div className="flex flex-wrap gap-2">
      <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">Vegetarian</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">Low sugar</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Mediterranean</Chip>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
