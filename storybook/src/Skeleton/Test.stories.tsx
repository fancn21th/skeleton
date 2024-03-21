import type { Meta, StoryObj } from "@storybook/react";
import { Test } from "@fancn21th/skeleton-design-system";

const meta = {
  title: "Skeleton/Test",
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
};
