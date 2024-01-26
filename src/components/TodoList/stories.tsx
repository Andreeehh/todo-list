import { Meta, Story } from '@storybook/react/types-6-0';
import { TodoList, TodoListProps } from '.';

export default {
  title: 'TodoList',
  component: TodoList,
} as Meta<TodoListProps>;

export const Template: Story<TodoListProps> = (args) => {
  return (
    <div>
      <TodoList {...args} />
    </div>
  );
};
