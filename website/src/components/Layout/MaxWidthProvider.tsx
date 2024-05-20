import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "w-full px-8 mx-auto",
  {
    variants: {
      size: {
        "lg": "max-w-screen-3xl",
        "md": "max-w-screen-2xl",
        "sm": "max-w-screen-xl",
      }
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export default function mwp({ className, size, children }: { className?: string; size?: "lg" | "md" | "sm"; children: React.ReactNode }) {
  return <div className={cn(buttonVariants({ className, size }))}>{children}</div>;
}
