import * as React from 'react'
 
function Counter() {
    const [count, setCount] = React.useState(0);
  
    const increase = () => setCount(count + 1);
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>Increase</button>
      </div>
    );
}
 
export default Counter