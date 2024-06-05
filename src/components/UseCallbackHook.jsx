import React from "react";

const UseCallbackHook = () => {
  return (
    <div>
      <h1>UseCallbackHook</h1>

      <p>
        useCallback is a React Hook that lets you cache a function definition
        between re-renders. It means, when you use the useCallback hook it
        doesn't create multiple instance of same function when re-renders
        happens. Instead of providing new function it provides the cached
        function on re-render of components.
      </p>
    </div>
  );
};

export default UseCallbackHook;
