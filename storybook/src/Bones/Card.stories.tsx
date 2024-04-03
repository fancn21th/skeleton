import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@fancn21th/molecules-organisms-bones";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const meta = {
  title: "Bones/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

// 故事 Default
export const Default: Story = {
  args: {
    children: "Card",
  },
};
