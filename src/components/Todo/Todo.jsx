"use client";

import { useSelector } from "react-redux";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="grid h-screen px-6 font-sans bg-blue-100 place-items-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        {/* <!-- header --> */}
        <TodoHeader />
        <hr className="mt-4" />

        {/* <!-- todo list --> */}
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
          {/* <!-- todo --> */}
          {todos
            .filter(filterByStatus)
            .filter(filterByColors)
            .map((todo) => (
              <TodoList todo={todo} key={todo.id} />
            ))}
        </div>
        <hr className="mt-4" />

        {/* <!-- footer --> */}
        <TodoFooter />
      </div>
    </div>
  );
};

export default Todo;
