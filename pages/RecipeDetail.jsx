import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionItem, BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardHeader, Checkbox, Chip, Image, Progress } from "@heroui/react";
import React, { useState } from "react";
import { Link , useParams } from "react-router-dom";

export default function RecipeDetail() {
    const hero = { title: 'Mediterranean Chickpea Bowl', image: 'https://pixabay.com/get/g945726eb1b17d6332973acb582958d210785e963ece7c6cc3c84247d983a5210bb4038d660e105058d0e302e03842295f4713576d411a115acc4a3536191c18f_640.jpg' };
    const ingredients = ["1 cup cooked quinoa", "1 can chickpeas", "1 cup cherry tomatoes", "1 cucumber", "2 tbsp olive oil", "Feta, crumbled", "Salt & pepper"];
    const [checked, setChecked] = useState(ingredients.map(() => false));
    const toggle = (i, v) => setChecked((prev) => prev.map((x, idx) => idx === i ? v : x));
    const steps = [
      "Rinse and drain chickpeas.",
      "Chop vegetables and prepare toppings.",
      "Mix quinoa, chickpeas, and veggies in a bowl.",
      "Drizzle with olive oil, season, and top with feta.",
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Breadcrumbs className="text-[var(--color-text)]">
      <BreadcrumbItem><Link to="/explore" className="text-[var(--color-text)]">Explore</Link></BreadcrumbItem>
      <BreadcrumbItem>Recipe</BreadcrumbItem>
      </Breadcrumbs>
      </section>
  <section className="w-full">
      <Card className="overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
      <Image removeWrapper src={hero.image} alt={hero.title} className="w-full h-64 md:h-full object-cover" />
      <div className="p-6 flex flex-col justify-center gap-4">
      <h1 className="text-2xl font-bold text-[var(--color-text)]">{hero.title}</h1>
      <div className="flex gap-2">
      <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">30 min</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">530 kcal</Chip>
      </div>
      <div className="flex gap-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]"><BookmarkIcon className="w-5 h-5 mr-2 inline text-[var(--color-text)]" /> Add to plan</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]"><HeartIcon className="w-5 h-5 mr-2 inline text-[var(--color-text)]" /> Save</Button>
      </div>
      </div>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Ingredients */}
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Ingredients</h3>
      </CardHeader>
      <CardBody className="p-6 space-y-2">
      {ingredients.map((ing, i) => (
      <div key={i} className="flex items-center gap-3">
      <Checkbox isSelected={checked[i]} onValueChange={(v) => toggle(i, v)} className="text-[var(--color-text)]">{ing}</Checkbox>
      </div>
      ))}
      <div className="pt-3">
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Add selected to grocery list</Button>
      </div>
      </CardBody>
      </Card>

      {/* Instructions */}
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl lg:col-span-2">
      <CardHeader className="p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Instructions</h3>
      </CardHeader>
      <CardBody className="p-6">
      <Accordion className="bg-transparent">
      {steps.map((s, idx) => (
      <AccordionItem key={idx+1} title={<span className="text-[var(--color-text)]">Step {idx+1}</span>} className="text-[var(--color-text)]">
      <p className="text-sm text-[var(--color-text)]/90">{s}</p>
      </AccordionItem>
      ))}
      </Accordion>
      </CardBody>
      </Card>

      {/* Nutrition facts */}
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Nutrition facts</h3>
      </CardHeader>
      <CardBody className="p-6 space-y-4">
      <div>
      <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-[var(--color-text)]">Calories</span>
      <span className="text-sm text-[var(--color-text)]/80">530</span>
      </div>
      <Progress value={65} aria-label="Calories" classNames={{indicator: "bg-[var(--color-accent-light)]", track: "bg-[var(--color-border)]"}} />
      </div>
      <div>
      <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-[var(--color-text)]">Protein</span>
      <span className="text-sm text-[var(--color-text)]/80">32g</span>
      </div>
      <Progress value={70} aria-label="Protein" classNames={{indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]"}} />
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
      <Chip size="sm" className="rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">High fiber</Chip>
      <Chip size="sm" className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">Omega-3</Chip>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
