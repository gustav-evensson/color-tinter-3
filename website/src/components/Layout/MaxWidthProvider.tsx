import { cn } from "@/lib/utils";

export default function mwp({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("w-full max-w-screen-2xl px-8 md:px-16 mx-auto", className)}>{children}</div>;
}
