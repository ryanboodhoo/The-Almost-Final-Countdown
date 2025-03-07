 import { useState, useRef } from "react";

export default function Player() {

const inputPlayerName = useRef();

const [enteredPlayerName,setEnteredPlayerName] = useState(null);
   
  function handleClick(){
    setEnteredPlayerName (inputPlayerName.current.value);
    inputPlayerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Player" }</h2>
      <h3> Please enter your name below</h3>
      <p>
        <input type="text" ref={inputPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
