import React, { useState } from 'react';

const UseStateHooks = () => {
  //useState will render the component
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('Initial text');

  const textPreview = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const incrementValue = () => {
    setCounter(counter + 1);
  };
  const decrementValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className='container'> {counter}</div>
      <div className='container'>
        <button onClick={incrementValue}>Increment</button>
        <button onClick={decrementValue}>Decrement</button>
      </div>

      <hr />
      <div>
        <input
          type='text'
          placeholder='enter something to preview'
          onChange={textPreview}
        />
        <br />
        {text}
      </div>
    </div>
  );
};

// Exporting the component
export default UseStateHooks;
