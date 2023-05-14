import React from 'react';
//import UseStateHook from '../src/components/useState/UseStateHooks';
//import UseState2 from './components/useState/UseState2';
import './App.css';
// import UseRef1 from './components/useRef/UseRef1';
import UseRef2 from './components/useRef/UseRef2';
// import UseEffect1 from './components/useEffect/UseEffect1';
// import UseEffect2 from './components/useEffect/UseEffect2';
// import UseEffect3 from './components/useEffect/UseEffect3';
// import UseReducer3 from './components/useReducer/UseReducer3';
// import UseReducer2 from './components/useReducer/UseReducer2';
//import UseState3 from './components/useState/UseState3';
//import UseState4 from './components/useState/UseState4';
// import UseState5 from './components/useState/UseState5';
//import UseReducerHook from './components/useReducer/UseReducerHook';

function App() {
  console.log(`this is App.js file`);
  return (
    <>
      <div className='useStateHooks'>
        {/* <UseStateHook /> */}
        {/* <UseState2 /> */}
        {/* <UseState3 /> */}
        {/* <UseState4 /> */}
        {/* <UseState5 /> */}
      </div>

      <div className='useReducerHook'>
        {/* <UseReducerHook /> */}
        {/* <UseReducer2 /> */}
        {/* <UseReducer3 /> */}
      </div>

      <div className='useEffectHook'>
        {/* <UseEffect1 /> */}
        {/* <UseEffect2 /> */}
        {/* <UseEffect3 /> */}
      </div>

      <div className='useRefHook'>
        {/* <UseRef1 /> */}
        <UseRef2 />
      </div>
    </>
  );
}

export default App;
