import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <p style={{ color: color }}>Hello World!</p>
      <button onClick={() => setColor("red")}>Change color</button>
    </>
  );
}

export default App;
