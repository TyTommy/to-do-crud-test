import { useState } from "react";
import CustomForm from "./CustomForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos((prev) => [...prev, task]);
  };

  const removeTask = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  console.log("TODOS_TEST:", todos);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">🧑🏻‍💻 To-Do List</h2>

      <CustomForm onAdd={addTask} />

      <ul className="bg-white rounded-2xl shadow-md divide-y divide-gray-200">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No task yet</li>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-3 font-medium"
            >
              <span className="text-xl">{todo}</span>
              <button
                onClick={() => removeTask(index)}
                className="cursor-pointer text-[8px] px-1.5 py-1.5 rounded-2xl bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
