"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "./utlis";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors",
      "data-[state=checked]:bg-primary", // Adjust background color when checked
      "data-[state=unchecked]:bg-gray-300", // Background for unchecked state
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full transition-transform duration-300 ease-in-out",
        "bg-white shadow-md ring-0",
        "data-[state=checked]:translate-x-5", // Move thumb to the right when checked
        "data-[state=unchecked]:translate-x-0" // Reset thumb to the left when unchecked
      )}
    />
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
