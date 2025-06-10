const Step3 = ({ prevStep, formdata, runfn }) => {
  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit this information?")) {
      runfn();
    }
  };
  return (
    <div className="review-step">
      <h1>Review Your Information</h1>

      <div className="review-details">
        <div className="review-item">
          <strong>Name:</strong> {formdata.Name || "Not provided"}
        </div>
        <hr className="divider" />

        <div className="review-item">
          <strong>Class:</strong> {formdata.class || "Not provided"}
        </div>
        <hr className="divider" />

        <div className="review-item">
          <strong>Roll No:</strong> {formdata.rollNo || "Not provided"}
        </div>
        <hr className="divider" />

        <div className="review-item">
          <strong>Address:</strong> {formdata.Address || "Not provided"}
        </div>
        <hr className="divider" />
        <div className="review-item">
          <strong>Phone Number :</strong>{" "}
          {formdata.phoneNumber || "Not provided"}
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
          onClick={runfn}
          className="submit-button"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Step3;
