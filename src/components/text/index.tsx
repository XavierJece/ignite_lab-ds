import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ITextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({
  size = "md",
  children,
  asChild = false,
  ...rest
}: ITextProps) {
  const TextContainer = asChild ? Slot : "span";

  return (
    <TextContainer
      className={clsx("text-gray-100", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </TextContainer>
  );
}
