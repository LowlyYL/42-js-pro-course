import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../store/reducers/todosReducer";

const AddTodo = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const onAddTodo = () => {
    dispatch(addTodo(name))
    setName('');
  }
  const onChangeName = (event) => {
    setName(event.target.value);
  }
  return (
    <Form layout="inline">
      <Form.Item label="Add todo for today">
        <Input value={name} onChange={onChangeName} />
      </Form.Item>
      <Button type="primary" onClick={onAddTodo}>Add</Button>
    </Form>
  );
};

export default AddTodo;
