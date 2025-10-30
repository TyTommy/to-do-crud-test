const CustomForm = () => {
  return (
    <form className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md">
      <input
        type="text"
        placeholder="Add new task"
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <button
        type="submit"
        className="border border-red-500 px-2 py-1.5 rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-700"
      >
        Add
      </button>
    </form>
  );
};

export default CustomForm;
