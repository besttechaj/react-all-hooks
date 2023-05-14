//USING_SPREAD_OPERATOR -> You can update a particular data and then use the spread operator to ensure that other data are copied back into the object IN THEIR PREVIOUS ORIGINAL STATE(i.e. which are unchanged). For example, if you want to update the particular data when a button is clicked,

import React, { useState } from 'react';

const UseState4 = () => {
  const [userDetails, setUserDetails] = useState({
    userName: {
      firstName: 'John',
      lastName: 'Doe',
      middlEName: 'KUMARI',
    },
    age: 20,
    hobby: 'Reading',
  });

  const changeName = () => {
    console.log(`running changeName event`);

    setUserDetails({
      ...userDetails,
      userName: {
        ...userDetails.userName,
        firstName: 'Kerry',
        lastName: 'patty',
      },
      age: 25,
      hobby: 'Singing and Dancing',
    });
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
        <h1>
          Hello {userDetails.userName.firstName}{' '}
          {userDetails.userName.middlEName} {userDetails.userName.lastName},
        </h1>
        <p>
          {userDetails.age} || {userDetails.hobby}
        </p>
        <div className='container'>
          <button
            onClick={changeName}
            style={{ width: '5  rem', height: '20px' }}
          >
            Click Me
          </button>
        </div>
      </div>
      {/* In the code above, a changeName function is created that will be triggered when the button is clicked. In this function, we changed the particular data.

It is important to note that if you decide only to change the particular data, the other information will disappear. This means we have to add the previous data to our object with the spread operator.


const changeName = () => {
    setUserDetails({
        // copy all other object values
        ...userDetails,
        // recreate the nested object that contains the field to update
        userName: {
            // copy all the values of the object
            ...userDetails.userName,
            // overwrite the value to update
            firstName: 'Jane',
        },
    });
};
This can be very tricky when dealing with multiple nested objects. Still, when you bear this in mind, you first copy all the object keys/values using the spread operator. You then create the nested object you want to update, then call all its values, and so on, till you get to the point where the value you want to update is located; then, you will update the value. */}
    </>
  );
};
export default UseState4;
