import React, { useState } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [isO, setIsO] = useState(false);

  const click = e => {
    !isO
      ? (e.target.innerText = "X") && setPlayer("O")
      : (e.target.innerText = "O") && setPlayer("X");
    setIsO(!isO);
  };
  return (
    <div className="App">
      <div className="board">
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
        <div className="section" onClick={click}></div>
      </div>
      <div className="information">Next player : {player}</div>
    </div>
  );
}

export default App;
