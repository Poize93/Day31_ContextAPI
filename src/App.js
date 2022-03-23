import React, { useState } from 'react';
import './style.css';
import { Context } from './Context';
import Counter1 from './Counter1';

export default function App() {
  const [value, setValue] = useState(5);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(5);
  };

  return (
    <div>
      <h3>App Component</h3>
      Value:{value}
      <br />
      <br />
      <button onClick={() => handleIncrement()}>Increment</button> &nbsp;
      <button onClick={handleIncrement}>Decerement</button> &nbsp;
      <button onClick={handleReset}>Reset</button>&nbsp;
      <Context.Provider
        value={{
          initialValue: value,
          handleIncrementFromProvider: handleIncrement,
          handleDecrementFromProvider: handleDecrement,
          handleResetFromProvider: handleReset,
        }} //we are providing these value in Context Provider , so that it can be ussed by other
      >
        <Counter1 />
      </Context.Provider>
    </div>
  );
}
