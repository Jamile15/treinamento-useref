import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const[number,setNumber] = useState(0);

  const numberRef = useRef(0)



  console.log("renderizou");
  console.log(numberRef)

    useEffect(()=> {
    //setNumber((prevNumber) => prevNumber + 10)
    numberRef.current = Math.random()
    })
  return (
    <div className="App">
      <h1>O número é : {number}</h1>
      <h1>O número do useRef é {numberRef.current}</h1>
      <h1>O contador é: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount +1)}> Adicionar</button>
     

    </div>
  );
}

export default App;
