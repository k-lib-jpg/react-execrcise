import { useState } from 'react';
 
const Counter: React.FC = () => {
  // useStateでカウントを管理
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) =>  prev - 1);
  };

  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <h2>カウンター: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
 
export default Counter;