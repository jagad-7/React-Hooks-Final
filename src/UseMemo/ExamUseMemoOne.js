import React, { useState, useMemo, useEffect } from "react";

const ExamUseMemoOne = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themChange = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Them Changed");
  }, [themChange]);

  return (
    <div>
      <h1>ExamUseMemoOne</h1>
      <div>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <br />
      <div>
        <button onClick={() => setDark(!dark)}>Change Theme</button>
        <h2 style={themChange}>The Number : {doubleNumber}</h2>
      </div>
    </div>
  );
};

const slowFunction = (number) => {
  for (let index = 0; index < 1000000000; index++) {}
  console.log("Slow Run Funtion");
  return number * 2;
};
export default ExamUseMemoOne;
