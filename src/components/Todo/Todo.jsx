import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  return (
    <div className="grid h-screen px-6 font-sans bg-blue-100 place-items-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        {/* <!-- header --> */}
        <TodoHeader />
        <hr className="mt-4" />

        {/* <!-- todo list --> */}
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
          {/* <!-- todo --> */}
          <TodoList />
        </div>
        <hr className="mt-4" />

        {/* <!-- footer --> */}
        <TodoFooter />
      </div>
    </div>
  );
};

export default Todo;
