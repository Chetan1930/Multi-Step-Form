import { useContext, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { FormContext } from "../context/FormContext";


const MultiStepform = ()=>{

    const {handleFormdata, nextStep, prevStep, runsubmit, data, val} = useContext(FormContext)

return (
    <>
        <h1>This is inside MultiStepForm</h1>
        <div>
            {val === 1 && <Step1 nextStep={nextStep} formdata={data} runfn={handleFormdata}/>}
            {val === 2 && <Step2 prevStep={prevStep} nextStep={nextStep} formdata={data} runfn={handleFormdata} />}
            {val === 3 && <Step3 prevStep={prevStep} formdata={data} runfn={runsubmit} />}
        </div>
    </>
);

}

export default MultiStepform;