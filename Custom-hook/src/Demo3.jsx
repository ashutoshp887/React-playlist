import useHook from "./useHook";

function Demo3() {
  const[count,increment,decrement]= useHook();
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Demo3