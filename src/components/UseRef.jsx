import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h3>
        useRef is a react Hook that allow us to create mutable variables, which
        will not re-render the components. When the variable values changes it
        will not re-render the components.It is also used for accessing dom
        element.
      </h3>

      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -1
      </button>
      {value}
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +1
      </button>
      <h1>Render Count :{count.current} </h1>
    </div>
  );
};

export default UseRef;
