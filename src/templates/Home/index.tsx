import { TodoList } from 'components/TodoList';
import * as Styled from './styles';

function Home() {
  return (
    <Styled.Wrapper>
      <TodoList></TodoList>
    </Styled.Wrapper>
  );
}

export default Home;
