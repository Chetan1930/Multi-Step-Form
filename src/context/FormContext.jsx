import React, {  createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [val, setVal] = useState(1);
  const [data, setData] = useState({
    Name: "",
    class: "",
    rollNo: "",
    Address: "",
    phoneNumber: "",
  });

  const nextStep = () => setVal(val + 1);
  const prevStep = () => setVal(val - 1);

  function handleFormdata(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function runsubmit(e) {
    console.log(data);
  }

  return (
    <FormContext.Provider
      value={{ handleFormdata, nextStep, prevStep, runfn: runsubmit, data, val }}
    >
      {children}
    </FormContext.Provider>
  );
};
