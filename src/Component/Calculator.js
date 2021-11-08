import React,{useState} from 'react'

function Calculator(){

    const [counter, setCounter] = useState("")
    const [num1,setNum1] = useState()
    const num1Change = (e) =>{
        setNum1(e.target.value);
    }
    const [num2, setNum2] = useState()
    const num2Change = (e) =>{
        setNum2(e.target.value)
    }
    const initial = () => {
        setCounter("")
        setNum1("")
        setNum2("")
    }
    const add = () => setCounter(parseInt(num1)+parseInt(num2))
    const sub = () => setCounter(num1-num2)
    const mul = () => setCounter(num1*num2)
    const div = () => setCounter(num1/num2)
    
    

    return (<div>

        <h1>Calculator App</h1>
        <input value={num1} onChange={num1Change}  type="number" placeholder="input a valid number 1"/>
        <br /><br />
        <input value={num2} onChange={num2Change} type="number" placeholder="input a valid number 2"/>
        <br /><br />
        <button onClick={add}>ADD</button>&nbsp;
        <button onClick={sub}>Subtraction</button>&nbsp;
        <button onClick={mul}>Multiplication</button>&nbsp;
        <button onClick={div}>Division</button>&nbsp;
        <br /><br />
        <h2>Result is</h2>
        <input value={counter} type="" />
        <br /><br />
        <button onClick={initial}>Clear</button>
    </div>
    )
}

export default Calculator
