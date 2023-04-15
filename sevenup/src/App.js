import './App.css';
import React, { useState } from 'react';
import sevenup from "./sevenup.png";

function App() {
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState("Start Game");
  const sevenUp = "UP!";

  const checkSeven = (number) => {
    return number.toString().includes("7");
  }

  const increment = () => {
    setCount(count + 1);
    if ((count % 7 === 0 && count !== 0) || (checkSeven(count))) {
      setDisplay(sevenUp);
    } else {
      setDisplay(count.toString());
    }
  }
  
  const reset = () => {
    setCount(0);
    setDisplay("Start Game");
  }


  return (
    <div style={{ backgroundColor: "#18a44c", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
  <img src={sevenup} alt='logo' style={{border: '4px solid #f01c19', backgroundColor: "#FFF", borderRadius: '30px', padding: '10px'}} />
      <div style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "2rem" }}>Seven Up!</div>
      <div style={{ fontSize: "3rem", marginBottom: "2rem" }}>{display}</div>
      <button onClick={increment} style={{ fontSize: "2rem", padding: "1rem", borderRadius: "2rem", backgroundColor: "#f01c19", color: "#FFF", marginBottom: "2rem", border: "none" }}>Add one!</button>
      <button onClick={reset} style={{ fontSize: "1.5rem", padding: "0.5rem", borderRadius: "1rem", backgroundColor: "#FFF", color: "#f01c19", border: "2px solid #f01c19" }}>Reset</button>
    </div>
  );
}

export default App;
