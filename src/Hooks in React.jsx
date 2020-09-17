// Project-1
// increment and Decrement button by react hooks

import React, { useState } from 'react';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const App = () => {
    // let count = 1;
    const state = useState();
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);
        // console.log("clicked" + count++);
    };
    // if you want decrement button also in ur project then->
    const DecNum = () => {
        setCount(count - 1);
    }
    return (
        <div className="container">
            <h1>{count}</h1>
            <button className="btn" onClick={IncNum}><AddIcon/></button>
            <button className="btn" onClick={DecNum}><DeleteIcon/></button>
        </div>
    );
};

export default App;

//{
//   project -1 CSS =>
//   .container{
//     background-color: aqua;
//     justify-content: center;
//     text-align: center;
//     box-sizing: border-box;
//     height: 300px;
//     padding-top: 50px;
// }
// .btn{
//     margin: 20px;
//     padding: 10px;
// }
// }


// Project-2
// current time by hooks in react

import React, { useState } from 'react';
const App = () => {
  const state = useState();
  let newTime = new Date().toLocaleTimeString();
  const [cTime,updateTime]= useState(newTime);
  const afterTime = () =>{
    let newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }

  return (
    <div className="dib pa4 tc">
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
      <h1>{cTime}</h1>
      <button onClick={afterTime}> Get Time</button>
    </div>
  );
};

export default App;

// Project-3
// background color change in hooks

import React, { useState } from 'react';
const App = () => {
  // let count = 1;
  const purple ="#8e44ad";
  const [bg, setBg] = useState(purple);
  const IncNum = () => {
    let newBg= "#34495e";
    setBg(newBg);
    // console.log("clicked" + count++);
  };
  return (
    <div style={{backgroundColor:bg}}>
        <h1>hello</h1>
      <button onClick={IncNum}> Click me</button>
    </div>
  );
};

export default App;