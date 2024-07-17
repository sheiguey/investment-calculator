import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Results({inputs}){
  const resultData = calculateInvestmentResults(inputs)
  const initialInvestment = resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;
  
   return(
    <table id="result">
       <thead>
         <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
         </tr>
       </thead>
       <tbody>
          {
            resultData.map(result=>{
                const totalInvestment=yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear-totalInvestment;
               (
                <tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
               )
            })
          }
       </tbody>
    </table>
   )
}