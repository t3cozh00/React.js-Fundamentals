// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [number, setNumber] = useState({
//     number1: "",
//     number2: "",
//     result: "",
//   });

//   const inputChanged = (event) => {
//     event.preventDefault();
//     setNumber({ ...number, [event.target.name]: event.target.value });
//   };

//   const onSum = (event) => {
//     event.preventDefault();
//     const sum = Number(number.number1) + Number(number.number2);
//     setNumber({ ...number, result: sum });
//   };

//   const onMinus = (event) => {
//     event.preventDefault();
//     const difference = Number(number.number1) - Number(number.number2);
//     setNumber({ ...number, result: difference });
//   };

//   return (
//     <>
//       <p>Result = {number.result}</p>
//       <form>
//         <input name="number1" value={number.number1} onChange={inputChanged} />
//         <input name="number2" value={number.number2} onChange={inputChanged} />
//         <button onClick={onSum}>+</button>
//         <button onClick={onMinus}>-</button>
//       </form>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);

  const inputChangedA = (event) => {
    setNumA(event.target.value);
  };

  const inputChangedB = (event) => {
    setNumB(event.target.value);
  };

  const calcSum = () => {
    setResult(Number(numA) + Number(numB));
  };

  const calcSub = () => {
    setResult(Number(numA) - Number(numB));
  };

  return (
    <>
      <p>Result = {result}</p>
      <input value={numA} onChange={inputChangedA} />
      <input value={numB} onChange={inputChangedB} />
      <button onClick={calcSum}>+</button>
      <button onClick={calcSub}>-</button>
    </>
  );
}

export default App;
