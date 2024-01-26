import * as Styled from './styles';
import { useEffect, useState } from 'react';
import * as StyledButton from '../Button/styles';
// import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Todo, TodoItem } from '../TodoItem';
import { TextInput } from '../TextInput';
import { Heading } from '../Heading';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [taskList, setTaskList] = useState<Todo[]>([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const [pageName, setPageName] = useState('To Do List');

  useEffect(() => {
    const storedTasks = sessionStorage.getItem('tasks');
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
    const storedName = sessionStorage.getItem('page-name');
    if (storedName) {
      setPageName(JSON.parse(storedName));
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

  const handleToggleEditing = () => {
    setIsEditingName(!isEditingName);
  };

  return (
    <Styled.Wrapper>
      <Styled.AddTaskDiv>
        <Styled.HeadingDiv>
          {isEditingName && (
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
          )}
          {isEditingName && (
            <StyledButton.Button onClick={handleToggleEditing} color="success">
              <CheckIcon></CheckIcon>
            </StyledButton.Button>
          )}
          {!isEditingName && (
            <Heading uppercase={true} as="h2">
              {pageName}
            </Heading>
          )}
          {/* {!isEditingName && (
            <StyledButton.Button onClick={handleToggleEditing} color="editing">
              <EditIcon></EditIcon>
            </StyledButton.Button>
          )} */}
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
