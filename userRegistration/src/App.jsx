import { useState } from "react";

import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const inputChanged = (event) => {
    event.preventDefault();
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone } = person;
    if (firstName && lastName && email && phone) {
      alert(`Welcome ${person.firstName}  ${person.lastName}`);
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <input
        placeholder="First name"
        name="firstName"
        value={person.firstName}
        onChange={inputChanged}
      />
      <input
        placeholder="Last name"
        name="lastName"
        value={person.lastName}
        onChange={inputChanged}
      />

      <input
        placeholder="Email"
        name="email"
        value={person.email}
        onChange={inputChanged}
      />

      <input
        placeholder="Phone"
        name="phone"
        value={person.phone}
        onChange={inputChanged}
      />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default App;
