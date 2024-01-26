import { Form } from 'react-bootstrap';
import * as Styled from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import * as StyledButton from '../Button/styles';

export type Todo = {
  text: string;
  completed: boolean;
};

export type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  removeTask: () => void;
};

export const TodoItem = ({ todo, onToggle, removeTask }: TodoItemProps) => {
  const handleToggle = () => {
    // Inverta o valor do estado completed e chame a função onToggle
    onToggle();
  };
  return (
    <Styled.Wrapper>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          fontStyle: todo.completed ? 'italic' : 'normal',
        }}
      >
        {todo.text}
      </span>
      <Styled.ButtonsWrapper>
        <StyledButton.Button onClick={removeTask} color="warning">
          <DeleteIcon />
        </StyledButton.Button>
        <Form.Check
          inline
          aria-label={todo.text}
          name="group1"
          type="checkbox"
          id={`inline-checkbox-1`}
          checked={todo.completed}
          onChange={handleToggle}
        />
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};
