import { useState } from "react";
import { Redirect } from "react-router-dom";

export const useRestrict = () => {
  const [fromMS, setFromMS] = useState(false);

  const checkFromMS = () => {
    setFromMS(true);
    console.log("true true")
    return(
    <Redirect to="/Play" />);
  };

  return { fromMS, checkFromMS };
};