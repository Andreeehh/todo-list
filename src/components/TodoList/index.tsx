import { TextInput } from 'components/TextInput';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Todo, TodoItem } from 'components/TodoItem';
import * as StyledButton from '../Button/styles';
import { Heading } from 'components/Heading';
import EditIcon from '@mui/icons-material/Edit';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [taskList, setTaskList] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTasks = sessionStorage.getItem('tasks');
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = () => {
    if (task.trim() !== '') {
      if (task.length > 80) {
        setErrorMessage('Task name to long');
        return;
      }
      const newTask: Todo = {
        text: task,
        completed: false,
      };
      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      sessionStorage.setItem('tasks', JSON.stringify(updatedTaskList));
      setTask('');
    }
  };

  const handleToggleTodo = (index: number) => {
    const updatedTaskList = taskList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo,
    );
    setTaskList(updatedTaskList);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTaskList));
  };

  const removeTask = (index: number) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTaskList));
  };

  return (
    <Styled.Wrapper>
      <Styled.AddTaskDiv>
        <Styled.HeadingDiv>
          <Heading uppercase={true} as="h2">
            To Do List
          </Heading>
          {/* <StyledButton.Button>
            <EditIcon></EditIcon>
          </StyledButton.Button> */}
        </Styled.HeadingDiv>
        <TextInput
          name="task"
          label="Task"
          onInputChange={(v) => {
            setTask(v);
            setErrorMessage('');
          }}
          value={task}
          errorMessage={errorMessage}
        />
        <StyledButton.Button onClick={addTask} color="success">
          Add Task
        </StyledButton.Button>
      </Styled.AddTaskDiv>

      <ul>
        {taskList.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => handleToggleTodo(index)}
            removeTask={() => removeTask(index)}
          />
        ))}
      </ul>
    </Styled.Wrapper>
  );
};
