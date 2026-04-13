import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-bg-base rounded-full px-6 py-3 text-sm hover:opacity-90 active:scale-[0.98]",
        ghost:
          "border border-white/10 text-text-primary rounded-full px-6 py-3 text-sm hover:bg-white/5 hover:border-white/20 active:scale-[0.98]",
        icon: "w-10 h-10 rounded-full border border-white/10 text-text-muted hover:text-text-primary hover:border-white/20",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
