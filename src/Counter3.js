import React from 'react';
/// next way Static ContextType = Context for consumer to con=nsume
import { Context } from './Context';

class Counter3 extends React.Component {
  static contextType = Context;
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h3> Counter 3 Component</h3>
        Value:{this.context.initialValue}
        <br />
        <br />
        <button onClick={() => this.context.handleIncrementFromProvider()}>
          Increment
        </button>{' '}
        &nbsp;
        <button onClick={this.context.handleIncrementFromProvider}>
          Decerement
        </button>{' '}
        &nbsp;
        <button onClick={this.context.handleResetFromProvider}>Reset</button>
        &nbsp;
      </>
    );
  }
}

export default Counter3;
