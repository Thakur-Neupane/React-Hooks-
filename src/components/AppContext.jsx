import React, { createContext } from "react";
export const AppContext = createContext();
const ContextProvider = (props) => {
  const phone = "1234567890";
  const name = "Thakur ";
  return (
    <div>
      <AppContext.Provider value={{ phone, name }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default ContextProvider;
