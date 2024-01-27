import { allCompleted, clearCompleted } from "@/redux/todos/actions";
import addTodo from "@/redux/todos/thunk/addTodo";
import { GrNotes } from "react-icons/gr";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LuPlusCircle } from "react-icons/lu";
import { useDispatch } from "react-redux";

const TodoHeader = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    if (text.length > 0) {
      dispatch(addTodo(text));
    }

    e.target.reset();
  };

  const handleCompleteAll = () => {
    dispatch(allCompleted());
  };

  const handleClearAll = () => {
    dispatch(clearCompleted());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-4 py-4 bg-gray-100 rounded-md"
      >
        <GrNotes size={"1.2rem"} />
        <input
          name="text"
          type="text"
          placeholder="Type your todo"
          className="w-full px-4 py-1 text-lg text-gray-500 bg-gray-100 border-none outline-none"
        />

        {/* add note button */}
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-no-repeat bg-contain`}
        >
          <LuPlusCircle size={"2rem"} />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAll}
          className="flex space-x-1 cursor-pointer"
        >
          {/* mark all button */}
          <LiaCheckDoubleSolid size={"1rem"} />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearAll} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </>
  );
};

export default TodoHeader;
