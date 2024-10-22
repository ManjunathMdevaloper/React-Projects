import React, { useRef } from 'react'
const Calculator = () => {
    let input = useRef();
    let getValue = (e)=>{
        input.current.value += e.target.innerText;
    }
    let finalRes = ()=>{
        input.current.value = eval(input.current.value)
    }
    let clearAll = ()=>{
        input.current.value = ""
    }
  return (
    <>
      <div className="calculator">
        <div className="header"><h1>Calculator</h1></div>
        <div className="container">
           <table>
            <thead>
                <tr>
                    <th colSpan={4}><input type="text" placeholder='Display...' ref={input}/></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colSpan={2} onClick={clearAll}>CE</th>
                    <th onClick={getValue}>/</th>
                    <th onClick={getValue}>*</th>
                </tr>
                <tr>
                    <th onClick={getValue}>7</th>
                    <th onClick={getValue}>8</th>
                    <th onClick={getValue}>9</th>
                    <th onClick={getValue}>-</th>
                </tr>
                <tr>
                    <th onClick={getValue}>4</th>
                    <th onClick={getValue}>5</th>
                    <th onClick={getValue}>6</th>
                    <th onClick={getValue}>+</th>
                </tr>
                <tr>
                    <th onClick={getValue}>1</th>
                    <th onClick={getValue}>2</th>
                    <th onClick={getValue}>3</th>
                    <th rowSpan={2} onClick={finalRes}>=</th>
                </tr>
                <tr>
                    <th onClick={getValue}>.</th>
                    <th onClick={getValue}>0</th>
                    <th onClick={getValue}>%</th>
                </tr>
            </tbody>
           </table>
        </div>
      </div>
    </>
  )
}

export default Calculator
