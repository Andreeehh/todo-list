import { Meta, Story } from '@storybook/react/types-6-0';
import { TodoList } from '.';

export default {
  title: 'TodoList',
  component: TodoList,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <TodoList {...args} />
    </div>
  );
};
