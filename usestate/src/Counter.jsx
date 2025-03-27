import * as React from 'react';

function CountDisplay({ count }) {
  return <h2>Count: {count}</h2>;
}

function IncreaseButton({ onClick }) {
  return <button onClick={onClick}>Increase</button>;
}

function DecreaseButton({ onClick }) {
  return <button onClick={onClick}>Decrease</button>;
}

function ResetButton({ onClick }) {
  return <button onClick={onClick}>Reset</button>;
}

function DoubleIncreaseButton({ onClick }) {
  return <button onClick={onClick}>Double Increase</button>;
}

function Counter() {
  const [count, setCount] = React.useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const doubleIncrease = () => setCount(count + 2);

  return (
    <div>
      <CountDisplay count={count} />
      <IncreaseButton onClick={increase} />
      <DecreaseButton onClick={decrease} />
      <ResetButton onClick={reset} />
      <DoubleIncreaseButton onClick={doubleIncrease} />
    </div>
  );
}

export default Counter;