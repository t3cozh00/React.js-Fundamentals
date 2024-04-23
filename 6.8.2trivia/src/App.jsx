import { useState } from "react";

import "./App.css";

function App() {
  const [question, setQuestion] = useState("");

  const fetchQuestion = () => {
    fetch(" https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((resData) => setQuestion(resData.results[0].question))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <p>{question}</p>
      <button onClick={fetchQuestion}>New question</button>
    </>
  );
}

export default App;
