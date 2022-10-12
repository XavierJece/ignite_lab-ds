import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import { ITextInputInputProps, ITextInputRootProps, TextInput } from ".";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="johndoe@example.com" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRootProps>;

export const Default: StoryObj<ITextInputRootProps> = {};
export const WithoutIcon: StoryObj<ITextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="johndoe@example.com" />,
  },
};
