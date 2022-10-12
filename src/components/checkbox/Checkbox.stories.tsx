import { Meta, StoryObj } from "@storybook/react";

import { ICheckboxProps, Checkbox } from ".";
import { Text } from "../text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Create account",
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<ICheckboxProps>;

export const Default: StoryObj<ICheckboxProps> = {};
