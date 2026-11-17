import { cn } from "@/lib/utils";
export function Card({ className, ...props }) { return <div data-slot="card" className={cn("rounded-2xl border bg-card text-foreground shadow-sm", className)} {...props} />; }
