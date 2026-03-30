import React from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Input, Switch, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

export default function Profile() {
    const [name, setName] = React.useState("Alex Johnson");
    const [email, setEmail] = React.useState("alex@example.com");
    const [notify, setNotify] = React.useState(true);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 flex items-center gap-4">
      <Avatar name="User" className="w-16 h-16" />
      <div className="space-y-1">
      <h2 className="text-[var(--color-text)] text-xl font-semibold">Alex Johnson</h2>
      <div className="flex gap-2">
      <Chip className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Pro</Chip>
      <Chip className="rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Joined 2024</Chip>
      </div>
      </div>
      </CardBody>
      </Card>

      <Card className="lg:col-span-2 bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] text-lg font-semibold">Account settings</h3>
      </CardHeader>
      <CardBody className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Input label="Name" labelPlacement="outside-top" value={name} onValueChange={setName} classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <Input label="Email" labelPlacement="outside-top" value={email} onValueChange={setEmail} type="email" classNames={{ inputWrapper: "input-focus-primary bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label: "text-[var(--color-text)]" }} />
      <div className="sm:col-span-2 flex items-center justify-between">
      <span className="text-[var(--color-text)] text-sm">Email notifications</span>
      <Switch isSelected={notify} onValueChange={setNotify} color="secondary" className="text-[var(--color-text)]">Enabled</Switch>
      </div>
      <div className="sm:col-span-2 flex justify-end gap-3 mt-2">
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)]">Cancel</Button>
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">Save changes</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="lg:col-span-3 bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] text-lg font-semibold">Recent activity</h3>
      </CardHeader>
      <CardBody className="p-5">
      <Table aria-label="Recent activity" className="backdrop-blur-sm bg-[var(--color-surface)]/60">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">DATE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTION</TableColumn>
      <TableColumn className="text-[var(--color-text)]">DETAILS</TableColumn>
      </TableHeader>
      <TableBody>
      {[{date:'Mar 20',action:'Saved recipe',detail:'To favorites'},{date:'Mar 18',action:'Generated plan',detail:'Week 12'},{date:'Mar 15',action:'Edited preferences',detail:'Dietary'}].map((r, idx) => (
      <TableRow key={idx}>
      <TableCell className="text-[var(--color-text)]">{r.date}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.action}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.detail}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
