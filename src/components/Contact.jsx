import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Contact = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone: {{ phone }}</h3>
      <h3>Phone: {{ name }}</h3>
    </div>
  );
};

export default Contact;
