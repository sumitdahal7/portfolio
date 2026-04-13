import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono",
        "bg-[#e8ff4710] text-[#e8ff47] border border-[#e8ff4718]",
        className
      )}
    >
      {children}
    </span>
  );
}
