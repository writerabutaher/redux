import Counter from "@/components/Counter/Counter";
import HooksCounter from "@/components/Counter/HooksCounter";
import DynamicCounter from "@/components/Counter/DynamicCounter";

const CounterPage = () => {
  return (
    <div className="grid h-screen gap-10 place-items-center ">
      <Counter />
      <Counter dynamic />
      {/* <HooksCounter />
      <DynamicCounter /> */}
    </div>
  );
};

export default CounterPage;
