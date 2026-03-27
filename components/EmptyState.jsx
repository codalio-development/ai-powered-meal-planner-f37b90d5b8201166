
        import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
        export default function EmptyState({}) {
        return (
            <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
    <CardBody className="flex flex-col items-center justify-center gap-3 py-10">
    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/15 flex items-center justify-center">
    <MagnifyingGlassIcon className="w-6 h-6 text-[var(--color-primary)]" />
    </div>
    <h3 className="text-[var(--color-text)] font-semibold">No results</h3>
    <p className="text-sm text-[var(--color-text)] opacity-80">Try adjusting your search or filters.</p>
    <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] mt-2">Explore Recipes</Button>
    </CardBody>
    </Card>
        );
        }
