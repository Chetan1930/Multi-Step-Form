
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
const Step1 = ()=>{

    const {handleFormdata, nextStep}=useContext(FormContext);
    return(
        <>
        <h1>Step 1 : </h1>
        <form action="">
            <input onChange={handleFormdata} type="text" name="Name" placeholder="Enter name :" required/>
            <input onChange={handleFormdata} type="text" name="class" placeholder="Class :" required/>
            <input onChange={handleFormdata} type="text" name="rollNo" placeholder="Roll_No :" required/>
        </form>

        <button  disabled> Prev</button>
        <button onClick={nextStep}>Next</button>
        </>
    );
}


export default Step1;