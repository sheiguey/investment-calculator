import { useState } from "react"

export default function UserInput(){
    const [userInput, setUserInput]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10
    });

    function handleChange(indentifierName,newValue){
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [indentifierName]:newValue
            }
        })
    }

    return(
        <section id="user-input"> 
           <div className="input-group">
             <p>
                <label>Initial Investment</label>
                <input type="number" value={userInput.initialInvestment} onChange={(e)=>handleChange('initialInvestment',e.target.value)} required/>
             </p>
             <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(e)=>handleChange('annualInvestment',e.target.value)} required/>
             </p>
           </div>
           <div className="input-group">
             <p>
                <label>Expected Return</label>
                <input type="number" value={userInput.expectedReturn} onChange={(e)=>handleChange('expectedReturn',e.target.value)} required/>
             </p>
             <p>
                <label>Duration</label>
                <input type="number" value={userInput.duration} onChange={(e)=>handleChange('duration',e.target.value)} required/>
             </p>
           </div>
        </section>
    )
}