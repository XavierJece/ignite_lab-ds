import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ReactNode } from "react";

export interface IHeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({
  size = "md",
  children,
  asChild = false,
  ...rest
}: IHeadingProps) {
  const HeadingContainer = asChild ? Slot : "h2";

  return (
    <HeadingContainer
      className={clsx("text-gray-100 font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </HeadingContainer>
  );
}
