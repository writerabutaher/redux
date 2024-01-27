import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container flex items-center justify-center h-20 gap-8 mx-auto">
      <Link href={"/"} className="px-4 py-2 text-xl font-semibold bg-blue-200">
        Home
      </Link>
      <Link
        href={"/counter"}
        className="px-4 py-2 text-xl font-semibold bg-blue-200"
      >
        Counter
      </Link>
      <Link
        href={"/todo"}
        className="px-4 py-2 text-xl font-semibold bg-blue-200"
      >
        Todo
      </Link>
    </div>
  );
};

export default Navbar;
