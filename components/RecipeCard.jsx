
        import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Chip, Image } from "@heroui/react";
import { HeartIcon, ClockIcon, FireIcon } from "@heroicons/react/24/outline";
        export default function RecipeCard({ recipe }) {
        return (
            <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-[var(--color-primary)]/30 transition-transform duration-200 hover:-translate-y-1">
    <CardHeader className="flex items-center justify-between p-4">
    <h3 className="text-sm font-semibold text-[var(--color-text)] truncate">{recipe.title}</h3>
    <Button isIconOnly size="sm" variant="light" className="rounded-full text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10">
    <HeartIcon className="w-5 h-5" />
    </Button>
    </CardHeader>
    <CardBody className="p-0">
    <Image src={recipe.image} alt={recipe.title} removeWrapper className="w-full h-40 object-cover" />
    <div className="p-4 flex items-center gap-2">
    <Chip size="sm" variant="flat" className="bg-[var(--color-primary)]/15 text-[var(--color-primary)] rounded-full">
    <ClockIcon className="w-4 h-4 mr-1 inline text-[var(--color-primary)]" />
    <span className="text-xs text-[var(--color-primary)]">{recipe.time || "30m"}</span>
    </Chip>
    <Chip size="sm" variant="flat" className="bg-[var(--color-secondary)]/15 text-[var(--color-secondary)] rounded-full">
    <FireIcon className="w-4 h-4 mr-1 inline text-[var(--color-secondary)]" />
    <span className="text-xs text-[var(--color-secondary)]">{recipe.calories || "450 kcal"}</span>
    </Chip>
    </div>
    </CardBody>
    <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2">
    <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-4">View</Button>
    <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Add to plan</Button>
    </CardFooter>
    </Card>
        );
        }
