import type { Meta, StoryObj } from '@storybook/react';
import { ExampleCard } from './ExampleCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/ExampleCard',
  component: ExampleCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  }
} satisfies Meta<typeof ExampleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    img: {
      src: 'https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      alt: '3D computer illustration',
      width: "300",
      height: "300"
    },
    title: "Example Card"
  },
};