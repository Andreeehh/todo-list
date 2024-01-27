import { TodoList } from '../../components/TodoList';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <TodoList></TodoList>
    </Styled.Wrapper>
  );
};
