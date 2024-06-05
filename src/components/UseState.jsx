import React from "react";
import { useState } from "react";

const UseState = () => {
  //   const [car, setCar] = useState({
  //     brand: "Ferrari",
  //     model: "Roma",
  //     year: "2024",
  //     color: "red",
  //   });
  //   const changeColor = () => {
  //     setCar(() => {
  //       return { ...car, color: "blue" };
  //     });
  //   };

  const [count, setCount] = useState(0);
  const increaseByFour = () => {
    setCount(count + 4);
  };
  return (
    <div>
      {/* <h1>My {car.brand}</h1>
      <h2>
        It is a beautiful {car.model} made in year{car.year} with color{" "}
        {car.color}
        <button onClick={changeColor}>Change color</button>
      </h2> */}

      <h1>My initial value {count}</h1>
      <button onClick={increaseByFour}>Increase by 4</button>
    </div>
  );
};

export default UseState;
