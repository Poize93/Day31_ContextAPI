import React from 'react';
/// next way <Context.Consumer> for consumer to con=nsume
import { Context } from './Context';
import Counter3 from './Counter3';

class Counter2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Context.Consumer>
        {(getValuesFromProvider) => {
          return (
            <>
              <h3>Counter 2 Component</h3>
              Value:{getValuesFromProvider.initialValue}
              <br />
              <br />
              <button
                onClick={() =>
                  getValuesFromProvider.handleIncrementFromProvider()
                }
              >
                Increment
              </button>{' '}
              &nbsp;
              <button
                onClick={getValuesFromProvider.handleIncrementFromProvider}
              >
                Decerement
              </button>{' '}
              &nbsp;
              <button onClick={getValuesFromProvider.handleResetFromProvider}>
                Reset
              </button>
              <Counter3/>
            </>
          );
        }}
      </Context.Consumer>
      
    );
  }
}

export default Counter2;
