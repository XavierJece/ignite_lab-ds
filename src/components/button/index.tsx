import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  className,
  asChild = false,
  ...props
}: IButtonProps) {
  const ButtonContainer = asChild ? Slot : "button";

  return (
    <ButtonContainer
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        {},
        className
      )}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
}
