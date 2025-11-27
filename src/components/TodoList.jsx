import { useCallback, useEffect, useMemo, useState } from "react";
import CustomForm from "./CustomForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = localStorage.getItem("todos");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          setTodos(parsed);
        }
      } catch (error) {
        console.error("Failed to loan todos:", error);
        localStorage.removeItem("todos");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = useCallback((text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTask]);
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

  const editTask = useCallback((id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  const filteredTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((t) => !t.completed);
    }

    if (filter === "completed") {
      return todos.filter((t) => t.completed);
    }

    return todos;
  }, [todos, filter]);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-200">
        🧑🏻‍💻 To-Do List
      </h2>

      <CustomForm onAdd={addTask} />

      <div className="flex justify-center gap-3 text-sm font-medium">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-lg ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded-lg ${
            filter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded-lg ${
            filter === "completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          Completed
        </button>
      </div>

      <ul className="bg-white rounded-2xl shadow-md divide-y divide-gray-200">
        {filteredTodos.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No task yet</li>
        ) : (
          filteredTodos.map((todo) => (
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
