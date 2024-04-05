import React, { useState } from "react";
import "./index.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  const [update, setUpdate] = useState("");

  const onIncerment = () => {
    if (update === "") {
      setValue((prev) => prev + 1);
    } else {
      
      setValue((prev) => prev + parseInt(update));
    }
  };
  const onDecrement = () => {
    if (update === "") {
      setValue((prev) => prev - 1);
    } else {
      
      setValue((prev) => prev - parseInt(update));
    }
  };
  const onReset = () => {
    setValue(0);
  };
  const chooseValue = (e) => {
    setUpdate(e.target.value);
  };

  return (
    
    <div className="counter-container">
     
      <div className="input">
      <h1>Counter APP</h1>
        <input
          type="text"
          placeholder="number want to Incr/Decr"
          value={update}
          onChange={chooseValue}
        ></input>
      </div>
      <h1 className="value">{value}</h1>
      <div className="">
        <button className="inc-dec" onClick={onIncerment}>Increment</button>
        <button  className="inc-dec" onClick={onDecrement}>Decrement</button>
        <button  className="inc-dec" onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
