import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((resData) => setUsers(resData.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <table>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt="userimg" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
