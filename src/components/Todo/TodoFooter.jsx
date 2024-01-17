import { colorChanged, statusChanged } from "@/redux/todos/filterTodos/actions";
import { useDispatch, useSelector } from "react-redux";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No task";

    case 1:
      return "1 task";

    default:
      return `${no_of_todos} tasks`;
  }
};

const TodoFooter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const todos = useSelector((state) => state.todos);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;

  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="flex justify-between mt-4 text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul className="flex items-center space-x-1 text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Complete")}
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`w-3 h-3 border-2 border-green-500 rounded-full cursor-pointer md:hover:bg-green-500 ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`w-3 h-3 border-2 border-red-500 rounded-full cursor-pointer md:hover:bg-red-500 ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`w-3 h-3 border-2 border-yellow-500 rounded-full cursor-pointer md:hover:bg-yellow-500 ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default TodoFooter;
