import React, { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }, [count]);
  //   WE CAN ADD MULTIPLE VARIABLES AND MULTIBLE ARRAYS HERE
  return (
    <div>
      <h1>Use Effect </h1>
      <p>
        The useEffect hook allows you to perform side effects in your
        components. Some examples of side effects are: fetching data from api,
        directly updating the DOM ,Timeout and set Interval
      </p>

      <h1>I have rendered {count} times.</h1>
    </div>
  );
};

export default UseEffect;
