import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React {counter} </h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>AddValue</button>{" "}
      <button onClick={removeValue}>RemoveValue</button>
      <p>Footer: {counter} </p>
    </>
  );
}

export default App;
