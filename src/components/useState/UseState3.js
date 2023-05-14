//Using an object as a state variable:When working with real-life data, there is a high tendency that these data will be received as an object that you might struggle with when calling or updating.For example, if you have a nested object with the user's details, you can call data with the dot operator noting how they are nested.

import React, { useState } from 'react';

const UseState3 = () => {
  const [userDetails, setUserDetails] = useState({
    myName: {
      firstName: 'John',
      lastName: 'Doe',
    },
    age: 20,
    hobby: 'Reading',
  });

  //Managing  the state of variable
  const handleClick = (event) => {
    console.log('running onClick Event');
    setUserDetails({
      myName: { firstName: 'Kerry', lastName: 'patty' },
      age: 23,
      hobby: 'singing',
    });
  };
  return (
    <div
      style={{
        border: '2px solid red',
        textAlign: 'center',
        height: '200px',
      }}
    >
      <h1>
        Hello {userDetails.myName.firstName} {userDetails.myName.lastName},
      </h1>
      <p>
        {userDetails.age} || {userDetails.hobby}
      </p>
      <div className='container'>
        <button
          onClick={handleClick}
          style={{ width: '5  rem', height: '20px' }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default UseState3;
