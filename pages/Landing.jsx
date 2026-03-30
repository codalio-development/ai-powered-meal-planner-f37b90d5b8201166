import React from "react";
import { ClipboardDocumentListIcon, HeartIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Chip, Progress, Tab, Tabs } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
          <section className="relative py-16 sm:py-20 px-6 bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-secondary)]/20 rounded-3xl">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div className="relative z-10 max-w-5xl mx-auto">
      <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-3xl shadow-primary">
      <CardBody className="p-8 sm:p-12 flex flex-col gap-6 items-center text-center">
      <div className="flex flex-wrap justify-center gap-2">
      <Chip className="rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">Personalized</Chip>
      <Chip className="rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]">Balanced</Chip>
      <Chip className="rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)]">Quick & Easy</Chip>
      </div>
      <h1 className="text-[var(--color-text)] text-3xl sm:text-5xl font-extrabold tracking-tight">Eat better with an AI meal planner</h1>
      <p className="text-[var(--color-text)]/80 text-base sm:text-lg max-w-2xl">Get weekly meal plans tailored to your preferences, budget, and schedule. Generate grocery lists instantly and cook with confidence.</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
      <Link to="/meal-plan/generate">
      <Button size="md" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] px-8 font-semibold hover:opacity-90 transition-all">Generate my plan</Button>
      </Link>
      <Link to="/explore">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-text)] text-[var(--color-text)] px-8 hover:bg-[var(--color-surface)]/50 transition-all">Explore recipes</Button>
      </Link>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
  <section className="w-full">
      <h2 className="text-[var(--color-text)] text-2xl font-bold mb-4">Why you’ll love it</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[{
      title: "Smart planning",
      desc: "AI tailors meals to your taste, time and macros.",
      icon: SparklesIcon
      },{
      title: "Grocery lists",
      desc: "Auto-generated lists to shop faster and cheaper.",
      icon: ClipboardDocumentListIcon
      },{
      title: "Dietary control",
      desc: "Allergens, dislikes and goals respected automatically.",
      icon: ShieldCheckIcon
      },{
      title: "Favorites & collections",
      desc: "Save what you love and build your own sets.",
      icon: HeartIcon
      }].map((f) => (
      <Card key={f.title} className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-all">
      <CardHeader className="flex items-center gap-3 p-5">
      <f.icon className="w-6 h-6 text-[var(--color-primary)]" />
      <h3 className="text-[var(--color-text)] text-lg font-semibold">{f.title}</h3>
      </CardHeader>
      <CardBody className="px-5 pb-5 -mt-2">
      <p className="text-[var(--color-text)]/80 text-sm mb-4">{f.desc}</p>
      <Button size="sm" variant="flat" className="rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Learn more</Button>
      </CardBody>
      </Card>
      ))}
      </div>
      </section>

  <section className="w-full">
  <h2 className="text-[var(--color-text)] text-2xl font-bold mb-4">How it works</h2>
  <Card className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-2xl">
  <CardBody className="p-6">
  <Tabs
  classNames={{
  tabList: "bg-[var(--color-background)]/60 rounded-xl p-1 border border-[var(--color-border)]",
  cursor: "bg-[var(--color-primary)] rounded-lg",
  tab: "rounded-lg text-[var(--color-text)]",
  tabContent: "group-data-[selected=true]:text-[var(--color-text)]"
  }}
  >
  <Tab key="prefer" title="Tell us your preferences">
  <div className="space-y-3">
  <p className="text-[var(--color-text)] text-sm">Pick your diet, allergens and disliked ingredients.</p>
  <Progress value={33} aria-label="Step 1" className="max-w-md" classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  </Tab>
  <Tab key="generate" title="Generate a plan">
  <div className="space-y-3">
  <p className="text-[var(--color-text)] text-sm">We build a balanced week matched to your goals.</p>
  <Progress value={66} aria-label="Step 2" className="max-w-md" classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  </Tab>
  <Tab key="cook" title="Cook & iterate">
  <div className="space-y-3">
  <p className="text-[var(--color-text)] text-sm">Cook tasty meals, rate recipes, and refine next week.</p>
  <Progress value={100} aria-label="Step 3" className="max-w-md" classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
  </div>
  </Tab>
  </Tabs>
  </CardBody>
  </Card>
  </section>
  <section className="relative py-10">
      <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="space-y-1 text-center sm:text-left">
      <h3 className="text-[var(--color-text)] text-xl font-semibold">Ready to eat better?</h3>
      <p className="text-[var(--color-text)]/80 text-sm">Generate your first plan in seconds. You can always tweak it later.</p>
      </div>
      <Link to="/meal-plan/generate">
      <Button size="md" className="rounded-full bg-[var(--color-secondary)] text-[var(--color-text)] px-8 font-semibold hover:opacity-90 transition-all">Get started</Button>
      </Link>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
