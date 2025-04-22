import Counter from "./Counter";
import { useState } from "react";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div>
      <div>Total Count: {count}</div>

      <Counter total={count} onClick={handleClick} />
      <Counter total={count} onClick={handleClick} />
    </div>
  );
}
