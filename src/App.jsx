import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2024",
    color: "red",
  });
  const changeColor = () => {
    setCar(() => {
      return { ...car, color: "blue" };
    });
  };
  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>
        It is a beautiful {car.model} made in year{car.year} with color{" "}
        {car.color}
        <button onClick={changeColor}>Change color</button>
      </h2>
    </div>
  );
}

export default App;
