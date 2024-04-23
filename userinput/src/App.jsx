import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const inputChanged = (event) => {
    event.preventDefault();
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  };
  return (
    <>
      <p>
        Name: {person.firstname} {person.lastname} Email: {person.email}
      </p>
      <form>
        <input
          placeholder="First name"
          name="firstname"
          value={person.firstname}
          onChange={inputChanged}
        />
        <input
          placeholder="Last name"
          name="lastname"
          value={person.lastname}
          onChange={inputChanged}
        />
        <input
          placeholder="Email"
          name="email"
          value={person.email}
          onChange={inputChanged}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
