import { useState, type ChangeEvent } from "react";
import { v4 as uuid } from "uuid";

type Todo = {
  id: string;
  text: string;
}

const TodoList = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo: Todo = {
        id: uuid(),
        text: inputValue.trim(),
    };

    setTodos([...todos, newTodo])
    setInputValue("");
  };

  const handleDeleteTodo = (id: string) => {
   setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
    <div>
      <h2>ToDoリスト ({todos.length}件)</h2>
      <input  value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleAddTodo}>追加</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            ID:{todo.id} {todo.text}
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default TodoList;