import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchResult = () => {
    fetch("https://api.github.com/search/repositories?q=" + keyword)
      .then((response) => response.json())
      .then((resData) => setRepositories(resData.items))
      .catch((err) => console.log(err));
  };

  const inputChanged = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <h2>Repositories</h2>
      <input type="text" value={keyword} onChange={inputChanged} />
      <input onClick={fetchResult} type="submit" value="Search" />
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
