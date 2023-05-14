import React, { useReducer } from 'react';

function UseReducerHook() {
  //useReducer...works better with Redux

  //takes two parameters action and state
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1, showText: state.showText };

      case 'toggleShowText':
        return { count: state.count, showText: !state.showText };

      case 'DECREMENT':
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  //state-> is an object which holds initial state of variables
  //dispatch-> is an function which is used to change the state of the variables
  //reducer -> function which is used to manage the operation performing on states
  //{data}-> initial state of the variables
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div
      className='container'
      style={{
        border: '2px solid red',
        textAlign: 'center',
        height: '200px',
      }}
    >
      <h1> {state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Click Here
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        decrement button
      </button>

      {/* this simply means if the below value is true then show the heading else hide it if it is false */}
      {state.showText && <h1>This is a text</h1>}
    </div>
  );
}

export default UseReducerHook;
