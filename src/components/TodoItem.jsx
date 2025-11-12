import { useCallback, useState } from "react";

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = useCallback(() => {
    if (isEditing && editValue.trim() !== "") {
      onEdit(todo.id, editValue);
    }
  });

  return (
    <li
      className={`flex justify-between items-center px-4 py-3 transitions-colors ${
        todo.completed ? "bg-green-50" : "bg-white"
      }`}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-(--color-success)"
        />

        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="border rounded px-2 py-1"
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:text-(--color-primary-hover)"
        >
          {isEditing ? "💾" : "✏️"}
        </button>
        <button className="text-(--color-danger) hover:text-(--color-danger-hover)">
          ✕
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
