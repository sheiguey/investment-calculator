import { useState } from "react"

export default function UserInput({onChangeInput,userInputs}){
    return(
        <section id="user-input"> 
           <div className="input-group">
             <p>
                <label>Initial Investment</label>
                <input type="number" value={userInputs.initialInvestment} onChange={(e)=>onChangeInput('initialInvestment',e.target.value)} required/>
             </p>
             <p>
                <label>Annual Investment</label>
                <input type="number" value={userInputs.annualInvestment} onChange={(e)=>onChangeInput('annualInvestment',e.target.value)} required/>
             </p>
           </div>
           <div className="input-group">
             <p>
                <label>Expected Return</label>
                <input type="number" value={userInputs.expectedReturn} onChange={(e)=>onChangeInput('expectedReturn',e.target.value)} required/>
             </p>
             <p>
                <label>Duration</label>
                <input type="number" value={userInputs.duration} onChange={(e)=>handleChange('duration',e.target.value)} required/>
             </p>
           </div>
        </section>
    )
}