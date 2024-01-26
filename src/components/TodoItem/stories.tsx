import { Meta, Story } from '@storybook/react/types-6-0';
import { TodoItem, TodoItemProps } from '.';

export default {
  title: 'TodoItem',
  component: TodoItem,
} as Meta<TodoItemProps>;

export const Template: Story<TodoItemProps> = (args) => {
  return (
    <div>
      <TodoItem {...args} />
    </div>
  );
};
