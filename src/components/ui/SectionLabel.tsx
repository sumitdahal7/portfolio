import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-6 block",
        className
      )}
    >
      {children}
    </p>
  );
}
