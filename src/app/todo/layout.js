import Header from "@/components/Todo/Header";

const TodoLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default TodoLayout;
