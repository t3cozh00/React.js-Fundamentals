import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=react")
      .then((response) => response.json())
      .then((resData) => setRepositories(resData.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Repositories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((result) => (
            <tr key={result.id}>
              <td>{result.full_name}</td>
              <td>
                <a href="{result.html_url}">{result.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
