import React, { useEffect, useState } from 'react';
//GREAT EXAMPLE OF UseEffect
function UseEffect3() {
  //useEffect--> useEffect will initiate whenever components's state changes or component re-rendered
  useEffect(() => {
    console.log(
      `calling useEffect hook whenever any component re-render its states using useState hook`
    );
    //What is setTimeout in JavaScript?setTimeout() global function. The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  const [count, setCount] = useState(0);
  return (
    console.log('component is rendering'),
    (
      <>
        <div>
          <h1>I have rendered the component {count} times!</h1>
        </div>
      </>
    )
  );
}

export default UseEffect3;
