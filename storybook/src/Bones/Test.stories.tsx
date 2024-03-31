import type { Meta, StoryObj } from "@storybook/react";
import { Test } from "@fancn21th/molecules-organisms-bones";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const meta = {
  title: "Bones/Test",
  component: Test,
  decorators: [
    (Story) => (
      <Theme
        accentColor="crimson"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Theme>
    ),
  ],
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
