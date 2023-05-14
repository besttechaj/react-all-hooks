//Initializing State as a Function
//we use useState hook for a function specifically for computation ->  the action of mathematical calculation.

import React, { useState } from 'react';

const UseState5 = () => {
  const expensiveComputation = () => {
    let number = 50;
    let newNumber = (50 % 10) * 10 - number;
    return newNumber;
  };

  const [calc, setCalc] = useState(() => expensiveComputation());

  return (
    <div>
      for more info visit:
      https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function#:~:text=If%20you%20want%20to%20use,result%20as%20the%20initial%20value.
      <p>{calc}</p>
    </div>
  );
};

export default UseState5;
