import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [userClick, setUserClick] = useState({ valueUser: "" });

  const changeHandler = (e) => {
    setUserClick((prevState) => {
      [...prevState, ([e.target.valueUser] = [e.target.value])];
    });
  };

  return (
    <div className="App">
      <center>
        <div>
          <input type="text" name="box1" onChange={changeHandler} />
          <input type="text" name="box2" onChange={changeHandler} />
          <input type="text" name="box3" onChange={changeHandler} />
          <br />
          <input type="text" name="box4" onChange={changeHandler} />
          <input type="text" name="box5" onChange={changeHandler} />
          <input type="text" name="box6" onChange={changeHandler} />
          <br />
          <input type="text" name="box7" onChange={changeHandler} />
          <input type="text" name="box8" onChange={changeHandler} />
          <input type="text" name="box9" onChange={changeHandler} />
        </div>
      </center>
    </div>
  );
}

export default App;
