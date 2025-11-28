import { useCallback, useState } from "react";

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = useCallback(() => {
    if (isEditing && editValue.trim() !== "") {
      onEdit(todo.id, editValue);
    }
    setIsEditing(!isEditing);
  }, [isEditing, editValue, onEdit, todo]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task ?"))
      onDelete(todo.id);
  };

  return (
    <li
      className={`flex justify-between items-center px-4 py-3 transitions-colors rounded-xs ${
        todo.completed ? "bg-green-50" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
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
            className="border rounded px-2 py-1 mr-2"
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
          className="px-1 py-1 font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="px-1 py-1 font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
