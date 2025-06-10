import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


const MultiStepform = ()=>{

        const [data,setData] = useState({Name:"" , class:"", rollNo:"" , Address:"", phoneNumber:""});
        const [val,setVal]= useState(1);

        const nextStep= ()=>(setVal(val+1));
        const prevStep = ()=>(setVal(val-1));

        function handleFormdata (e){
            setData({...data,[e.target.name]:e.target.value});
        }

        function runsubmit(e){
            console.log(data);
        }


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