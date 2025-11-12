import { useCallback, useState } from "react";
import CustomForm from "./CustomForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTask = useCallback((task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const editTask = useCallback((id, newTask) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">🧑🏻‍💻 To-Do List</h2>

      <CustomForm onAdd={addTask} />

      <ul className="bg-white rounded-2xl shadow-md divide-y divide-gray-200">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No task yet</li>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTask}
              onToggle={toggleTask}
              onEdit={editTask}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
