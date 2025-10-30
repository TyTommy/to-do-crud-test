import CustomForm from "./CustomForm";

const TodoList = () => {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">🧑🏻‍💻 To-Do List</h2>

      <CustomForm />
    </div>
  );
};

export default TodoList;
