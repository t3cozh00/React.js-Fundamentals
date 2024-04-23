import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const inputChanged = (event) => {
    event.preventDefault();
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const showAlert = (event) => {
    event.preventDefault();
    if (person.age >= 18) {
      alert(`Hello ${person.name}`);
    } else {
      alert("You are too young");
    }
  };

  return (
    <>
      <form onSubmit={showAlert}>
        <input name="name" value={person.name} onChange={inputChanged} />
        <input name="age" value={person.age} onChange={inputChanged} />
        <input type="submit" value="Check age" />
      </form>
    </>
  );
}

export default App;
