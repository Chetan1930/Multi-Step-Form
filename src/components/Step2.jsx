import { useContext } from "react";
import { FormContext } from "../context/FormContext";
const Step2 = () => {
    const { prevStep, nextStep, handleFormdata } = useContext(FormContext)
  return (
    <>
      <h1>This is step 2 bhai </h1>
      <form action="">
        <input
          onChange={handleFormdata}
          type="text"
          name="Address"
          placeholder="Adress :"
        />
        <br />
        <hr />
        <input
          onChange={handleFormdata}
          type="text"
          name="phoneNumber"
          placeholder="Phone_No :"
        />
      </form>
      <button onClick={prevStep}>Prev</button>
      {"   "}
      <button onClick={nextStep}>Next</button>
    </>
  );
};

export default Step2;
