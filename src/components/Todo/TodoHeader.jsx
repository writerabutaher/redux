import { GrNotes } from "react-icons/gr";
import { LuPlusCircle } from "react-icons/lu";
import { LiaCheckDoubleSolid } from "react-icons/lia";

const TodoHeader = () => {
  return (
    <>
      <form className="flex items-center px-4 py-4 bg-gray-100 rounded-md">
        <GrNotes size={"1.2rem"} />
        <input
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
        <li className="flex space-x-1 cursor-pointer">
          {/* mark all button */}
          <LiaCheckDoubleSolid size={"1rem"} />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul>
    </>
  );
};

export default TodoHeader;
