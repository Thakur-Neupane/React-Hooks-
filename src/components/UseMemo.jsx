import React, { useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!!");
    return Math.pow(num, 3);
  }
  const result = cubeNum(number);
  return (
    <div>
      <h1>Use Memo</h1>
      <p>
        {" "}
        The React useMemo Hook returns a memoized value. It's like caching a
        value so that it doesn't need to recalculated. The use memo hook only
        runs when one of its dependencies gets updated. This can improve the
        performance of application. There is one more hook in react to improve
        the performance of application that is useCallBack hook. The use memo
        hook and use call back hook are similar. The main difference is: use
        Memo hook returns a memoized value whereas use callback returns a
        memoized function.
      </p>

      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number: {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter++
      </button>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default UseMemo;
