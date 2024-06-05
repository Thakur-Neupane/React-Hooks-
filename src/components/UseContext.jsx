import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";

const UseContext = () => {
  return (
    <div>
      <h1>UseContext</h1>
      <p>
        useContext is a react hook that allows you to access data from any
        component without explicitly passing it down through props at every
        level.Simply it is used to manage global data in the react app.
      </p>
      <h2>Steps</h2>
      <ul>
        <li>creating the context</li>
        <li> providing the conext</li>
        <li>consuming the context</li>
      </ul>

      <Profile />
      <Footer />
    </div>
  );
};

export default UseContext;
