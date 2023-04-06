import React, { useState } from "react";

function CounterToday() {
  const [count, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(count + 10);
  };
  const clickHandlerTwo = () => {
    if (count > 0) {
      setCounter(count - 10);
    } else {
      alert("Counter cannot be less than zero");
    }
  };

  return (
    <div>
      Count - {count}
      <button onClick={clickHandler}>Increment</button>
      <button onClick={clickHandlerTwo}>Decrement</button>
    </div>
  );
}

export default CounterToday;
