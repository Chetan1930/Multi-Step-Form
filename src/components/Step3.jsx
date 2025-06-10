import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Step3 = () => {

    const { prevStep, data, handleFormdata, handleSubmit , runfn} = useContext(FormContext);
  const handleSubmit2 = () => {
    if (window.confirm("Are you sure you want to submit this information?")) {
      runfn();
    }
  };
  return (
    <div className="review-step">
      <h1>Review Your Information</h1>

      <div className="review-details">
        <div className="review-item">
          <strong>Name:</strong> {data.Name || "Not provided"}
        </div>
        <hr className="divider" />

        <div className="review-item">
          <strong>Class:</strong> {data.class || "Not provided"}
        </div>
        <hr className="divider" />

        <div className="review-item">
          <strong>Roll No:</strong> {data.rollNo || "Not provided"}
        </div>
        <hr className="divider" />

        <div className="review-item">
          <strong>Address:</strong> {data.Address || "Not provided"}
        </div>
        <hr className="divider" />
        <div className="review-item">
          <strong>Phone Number :</strong>{" "}
          {data.phoneNumber || "Not provided"}
        </div>
        <hr className="divider" />
      </div>

      <div className="navigation-buttons">
        <button onClick={prevStep} className="nav-button prev-button">
          Previous
        </button>

        <button
          disabled
          className="nav-button disabled-button"
          aria-disabled="true"
        >
          Next
        </button>

        <button
          onClick={handleSubmit2}
          className="submit-button"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Step3;
