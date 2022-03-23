import React, { useContext } from 'react';
//using useContext , to consume from consumerimport
import { Context } from './Context';
import Counter2 from './Counter2';

function Counter1() {
  const getValuesFromProvider = useContext(Context);
  return (
    <>
      <h3> Counter 1 component</h3>
      Value:{getValuesFromProvider.initialValue}
      <br />
      <br />
      <button
        onClick={() => getValuesFromProvider.handleIncrementFromProvider()}
      >
        Increment
      </button>{' '}
      &nbsp;
      <button onClick={getValuesFromProvider.handleIncrementFromProvider}>
        Decerement
      </button>{' '}
      &nbsp;
      <button onClick={getValuesFromProvider.handleResetFromProvider}>
        Reset
      </button>
      &nbsp;
      <Counter2 />
    </>
  );
}

export default Counter1;
