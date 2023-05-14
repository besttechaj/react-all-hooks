import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UseEffect1 = () => {
  const [data, setData] = useState('');

  const [count, setCount] = useState(0);

  useEffect(
    () => {
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          setData(response.data[0].email);
          console.log(`API was called`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    []
    //if we don't provide any array like [] then useEffect will be called every time whenever page re-renders
    //[] if we provide empty[]array then use Effect will be called only once.
    //[count] Inside empty array->here you can pass any useState variable, whenever state value get change useEffect hook will be executed .
  );

  return (
    <>
      <div>
        <h1>{data}</h1>
        <h1>{count}</h1>
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </>
  );
};

export default UseEffect1;
