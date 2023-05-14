//Combining all the states inside an Object : You can combine all these into an object and then access them within our JSX via the dot operator

import React, { useState } from 'react';

const useState2 = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    age: 20,
    hobby: 'Reading',
  });

  //Managing  the state of variable
  const handleClick = (event) => {
    console.log('running onClick Event');
    setUserDetails({ name: 'kerry patty', age: 23, hobby: 'singing' });
  };
  return (
    <>
      <div
        style={{
          border: '2px solid red',
          textAlign: 'center',
          height: '200px',
        }}
      >
        <h1>{userDetails.name}</h1>
        <h3>
          {userDetails.age} || {userDetails.hobby}
        </h3>
        <div className='container'>
          <button
            onClick={handleClick}
            style={{ width: '5  rem', height: '20px' }}
          >
            Click Me
          </button>
        </div>
      </div>

      {/* Another way to do this, if you don't want to use the dot operator, would be to destructure. When you have nested objects, this method would no longer be ideal, but since you have few items, you can destructure. */}
      {/* const App = () => {
    const [{name, age, hobby}, setUserDetails] = useState({
        name: 'John Doe',
        age: 20,
        hobby: 'Reading',
    });

    return (
        <div>
            <h1>{name}</h1>
            <p>
                {age} || {hobby}
            </p>
        </div>
    );
}; */}
    </>
  );
};

export default useState2;
