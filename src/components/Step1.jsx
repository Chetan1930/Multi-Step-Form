
const Step1 = ({nextStep, formdata, runfn})=>{

    return(
        <>
        <h1>Enter your Name, Class , Roll_NO </h1>
        <form action="">
            <input onChange={runfn} type="text" name="Name" placeholder="Enter name :" required/>
            <input onChange={runfn} type="text" name="class" placeholder="Class :" required/>
            <input onChange={runfn} type="text" name="rollNo" placeholder="Roll_No :" required/>

        </form>

        <button  disabled> Prev</button>
        <button onClick={nextStep}>Next</button>
        </>
    );
}


export default Step1;