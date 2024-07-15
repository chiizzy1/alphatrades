import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("flex items-center justify-center disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "text-white bg-primary text-[16px] leading-[16px] text-center font-semibold",
      outline: "text-white border border-white border-[1px] text-[16px] leading-[16px] text-center font-semibold",
    },
    size: {
      default: "w-[156px] h-[56px]",
      sm: "w-[96px] h-[40px]",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
