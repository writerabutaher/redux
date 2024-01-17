import { colorSelected, deleted, toggled } from "@/redux/todos/actions";
import { LuPlusCircle } from "react-icons/lu";
import { useDispatch } from "react-redux";

const TodoList = ({ todo }) => {
  const { id, text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleStatusChange = (todoId) => {
    dispatch(toggled(todoId));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(colorSelected(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleted(todoId));
  };

  return (
    <div className="flex items-center justify-start p-2 space-x-4 border-b hover:bg-gray-100 hover:transition-all border-gray-400/20 last:border-0">
      <div
        className={`flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-white border-2 border-gray-400 rounded-full ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          onClick={() => handleStatusChange(id)}
          type="checkbox"
          className="absolute rounded-full opacity-0 cursor-pointer"
        />
        {completed && (
          <svg
            className="w-3 h-3 text-green-500 pointer-events-none fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`flex-1 select-none ${completed && "line-through"}`}>
        {text}
      </div>

      <div
        onClick={() => handleColorChange(id, "green")}
        className={`flex-shrink-0 w-4 h-4 ml-auto  border-2  rounded-full cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && " bg-green-500 "
        }`}
      ></div>
      <div
        onClick={() => handleColorChange(id, "yellow")}
        className={`flex-shrink-0 w-4 h-4 ml-auto  border-2  rounded-full cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && " bg-yellow-500 "
        }`}
      ></div>
      <div
        onClick={() => handleColorChange(id, "red")}
        className={`flex-shrink-0 w-4 h-4 ml-auto  border-2  rounded-full cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && " bg-red-500 "
        }`}
      ></div>

      {/* delete button */}
      <button onClick={() => handleDelete(id)}>
        <LuPlusCircle size={"1.2rem"} className="rotate-45" />
      </button>
    </div>
  );
};

export default TodoList;
