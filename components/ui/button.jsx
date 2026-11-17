import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4", { variants: { variant: { default: "bg-primary text-white hover:bg-primary/90 shadow-xs", outline: "border bg-card hover:bg-secondary" } }, defaultVariants: { variant: "default" } });
export function Button({ className, variant, asChild = false, ...props }) { const Comp = asChild ? Slot : "button"; return <Comp data-slot="button" className={cn(buttonVariants({ variant }), "h-11 px-5", className)} {...props} />; }
