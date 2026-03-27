
        import React from "react";
import { Spinner } from "@heroui/react";
        export default function LoadingSpinner({}) {
        return (
            <div className="w-full flex items-center justify-center py-10">
    <Spinner size="lg" className="text-[var(--color-primary)]" />
    </div>
        );
        }
