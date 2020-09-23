import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  function handleClick(e) {
    setInput(input + e.target.name);
  }

  function clear() {
    setInput("");
    setResult("0");
  }

  function calculate(e) {
    try {
      setResult(eval(input).toString());
      setInput(input + e.target.name + eval(input).toString());
    } catch (error) {
      setResult("error");
    }
  }

  return (
    <div id="app">
      <div className="calculator">
        <div className="formulaScreen">{input}</div>
        <div id="display">{result}</div>
        <button id="clear" className="jumbo" onClick={clear}>AC</button>
        <button name="/" id="divide" className="operator" onClick={handleClick}>/</button>
        <button name="*" id="multiply" className="operator" onClick={handleClick}>*</button>
        <button name="7" id="seven" onClick={handleClick}>7</button>
        <button name="8" id="eight" onClick={handleClick}>8</button>
        <button name="9" id="nine" onClick={handleClick}>9</button>
        <button name="-" id="subtract" className="operator" onClick={handleClick}>-</button>
        <button name="4" id="four" onClick={handleClick}>4</button>
        <button name="5" id="five" onClick={handleClick}>5</button>
        <button name="6" id="six" onClick={handleClick}>6</button>
        <button name="+" id="add" className="operator" onClick={handleClick}>+</button>
        <button name="1" id="one" onClick={handleClick}>1</button>
        <button name="2" id="two" onClick={handleClick}>2</button>
        <button name="3" id="three" onClick={handleClick}>3</button>
        <button name="0" className="jumbo" onClick={handleClick}>0</button>
        <button name="." id="decimal" onClick={handleClick}>.</button>
        <button name="=" id="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default App;