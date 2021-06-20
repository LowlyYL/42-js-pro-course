import { List, Typography, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleDoneTodo } from "../../store/reducers/todosReducer";
import { getFilter, getItems } from "../../store/selectors/todosSelectors";

const Todos = () => {
  const todos = useSelector(getItems);
  const theme = useSelector(getFilter);

  const dispatch = useDispatch();

  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }
  const onToggleDoneTodo = (id) => {
    dispatch(toggleDoneTodo(id));
  }

  const filteredTodos = () => {
    if(theme === 'ALL') {
      return todos
    }
    if(theme === 'ACTIVE') {
      return todos.filter(item => item.isDone === false)
    }
    if(theme === 'DONE') {
      return todos.filter(item => item.isDone === true)
    }
  }  

  return (
    <List
      dataSource={filteredTodos()}  
      bordered
      renderItem={(item) => (
        <List.Item id={item.id}>
          <Typography.Text delete={item.isDone}>{item.name}</Typography.Text>
          <div>
            <Button onClick={() => onToggleDoneTodo(item.id)} >{item.isDone ? "Undo" : "Done"}</Button>
            <Button danger onClick={() => onRemoveTodo(item.id)} >Delete</Button>
          </div>
        </List.Item>
      )}
    />
  );
};

export default Todos;
