import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRootProps {
  children: ReactNode;
}

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: ITextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 outline-none",
        {}
      )}
    >
      {children}
    </div>
  );
}

function TextInputInput(props: ITextInputInputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "bg-transparent text-gray-100 text-xs placeholder:text-gray-400 outline-none",
        {}
      )}
    />
  );
}

function TextInputIcon({ children }: ITextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputRoot.displayName = "TextInput.Root";
TextInputRoot.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
