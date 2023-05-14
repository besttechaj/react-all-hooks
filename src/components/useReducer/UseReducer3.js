import React, { useReducer } from 'react';
//useReducer receives the previous state and must return to a new state, it also receives the action. Action is the value you call with your dispatch function, in the above code it’s dispatchCounter.
const UseReducer3 = () => {
  const [state, dispatchCounter] = useReducer(
    (oldState, action) => {
      if (action.type === 'inc') {
        return { counter: oldState.counter + 1 };
      }
      if (action.type === 'dec') {
        return { counter: oldState.counter - 1 };
      }
      return oldState;
    },
    { counter: 10 }
  );

  return (
    <>
      <div>reducer current counter is {state.counter}</div>
      <button onClick={() => dispatchCounter({ type: 'inc' })}>increase</button>
      <button onClick={() => dispatchCounter({ type: 'dec' })}>decrease</button>
    </>
  );
};

export default UseReducer3;
