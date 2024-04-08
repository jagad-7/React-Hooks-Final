import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComp = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={"age"} number={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count text={"salary"} number={salary} />
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComp;
