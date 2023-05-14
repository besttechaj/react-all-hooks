import React, { useReducer } from 'react';

const UseReducer2 = () => {
  //reducer(state,action)-> here state takes the initial value
  const reducer = (state, action) => {
    switch (action) {
      case 'add':
        return state + 1;

      case 'sub':
        return state - 1;

      case 'reset':
        return 0;

      default:
        throw new Error('invalid dispatch');
    }
  };

  let initialState = 0;

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch('add')}>add</button>
      <button onClick={() => dispatch('sub')}>subtract</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

export default UseReducer2;
