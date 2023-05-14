import React, { useEffect, useState } from 'react';

const UseEffect2 = () => {
  console.log('rendering useeffect2 component');
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(
    () => {
      //below line will execute in top to bottom order inside useEffect
      console.log('USE_EFFECT-HOOK IS RUNNING');
      alert('button is clicked');
      console.log('clicking again');
    },
    [nums]
    //whenever nums's value changes ,useEffect will execute hence we pass nums inside array container
  );

  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me {num}
      </button>
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        click me {nums}
      </button>
    </div>
  );
};

export default UseEffect2;
