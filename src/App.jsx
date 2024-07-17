import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results";


function App() {
  const [userInput, setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});

const inputIsValid =duration>=1;

function handleChange(indentifierName,newValue){
    setUserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [indentifierName]:+newValue
        }
    })
}
  return (
    <>
    <Header/>
    <UserInput onChangeInput={handleChange} userInputs={userInput}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results inputs={userInput}/>}
    </>
    
  )
}

export default App
