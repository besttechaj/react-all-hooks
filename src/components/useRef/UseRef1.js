import React, { useRef } from 'react';
//useRef -> to manipulate specific element
const UseRef1 = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef);
    //to target the specific element vale -> useRefName.current.value
    //.current -> targeted tag
    //.value -> present value inside the tag
    console.log(inputRef.current.value);

    //to focus the input field .. display the black border
    inputRef.current.focus();

    //to empty the input after click
    // inputRef.current.value = '';
  };
  return (
    <div>
      <h1>manipulating the dom's element using useRef hook </h1>

      <input type='text' ref={inputRef} />
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default UseRef1;
