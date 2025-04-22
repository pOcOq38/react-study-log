import { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          onClick();
        }}
      >
        +
      </button>
      <h1>total {total}</h1>
    </div>
  );
}
