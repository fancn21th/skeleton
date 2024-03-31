import type { Meta, StoryObj } from "@storybook/react";
import { Test } from "@fancn21th/molecules-organisms-bones";

const meta = {
  title: "Bones/Test",
  component: Test,
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof Test>;

// 故事 Default
export const Default: Story = {
  args: {
    children: "Test",
  },
};

// 故事 Another
export const Another: Story = {
  args: {
    children: "Test2",
  },
  // 覆盖 argTypes
  argTypes: {
    children: {
      control: "inline-radio",
      options: ["Test2", "Test3"],
    },
  },
};
