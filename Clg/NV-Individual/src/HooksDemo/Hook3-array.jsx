import React, { useState } from 'react';

const UseStateEx = () => {
  const [arr1, setArr1] = useState([10, 20, 30, 40, 50]);
  const [val1, setVal1] = useState(0); // value
  const [val2, setVal2] = useState(0); // index

  const addElement = (v1) => {
    setArr1([...arr1, v1]);
  };

  const removeElement = (v1) => {
    setArr1(arr1.filter((x) => x !== v1));
  };

  const updateElement = (k1, v1) => {
    let newArr = arr1.map((x, idx) => (idx === k1 ? v1 : x));
    setArr1(newArr);
  };

  return (
    <>
    <div align="center" >
      <h2>Array elements are: {arr1.join(", ")}</h2>  

      <input
        type="number"
        placeholder="Enter value"
        onChange={(e) => setVal1(Number(e.target.value))}
      />

      &nbsp;

      <input
        type="number"
        placeholder="Enter index"
        onChange={(e) => setVal2(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => addElement(val1)}>Add</button> &nbsp;
      <button onClick={() => removeElement(val1)}>Remove</button> &nbsp;
      <button onClick={() => updateElement(val2, val1)}>Update</button> &nbsp;
      </div>
    </>
  );
};

export default UseStateEx;
