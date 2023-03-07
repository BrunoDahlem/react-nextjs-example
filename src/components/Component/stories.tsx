import { Component } from '.';

export default {
  title: 'Component',
  component: Component,
  args: {
    text: 'Component',
  },
  argTypes: {
    text: { type: 'string' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <Component {...args} />
    </div>
  );
};
