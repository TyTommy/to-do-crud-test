import { useState } from "react";

const CustomForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task..."
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Add
      </button>
    </form>
  );
};

export default CustomForm;
