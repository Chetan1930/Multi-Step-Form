const Step2 = ({ prevStep, nextStep, runfn }) => {
  return (
    <>
      <h1>This is step 2 bhai </h1>
      <form action="">
        <input
          onChange={runfn}
          type="text"
          name="Address"
          placeholder="Adress :"
        />
        <br />
        <hr />
        <input
          onChange={runfn}
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
