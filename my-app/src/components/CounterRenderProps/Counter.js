const { useState } = require("react");

function Counter({component: Component}) {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      {Component ? <Component count={count} /> : count}
    </div>
  )
}

export default Counter;
