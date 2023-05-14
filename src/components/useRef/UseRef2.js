//The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
//Does Not Cause Re-renders:
//If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.

import React, { useState, useEffect, useRef } from 'react';
//checking component re-rendering no. of times!
const UseRef2 = () => {
  const [text, setText] = useState('');

  const renderCount = useRef(0);

  //to check component re-rendering use useEffect Hook
  useEffect(() => {
    console.log(`this is useEffect-hook`);
    //.current is an object/property
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <div>
        {console.log(`rendering the component`)}
        <input
          type='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <h1>Preview text {text}</h1>
        <h1>
          number of times, this component re-rendered is {renderCount.current}
        </h1>
      </div>
    </>
  );
};

export default UseRef2;
