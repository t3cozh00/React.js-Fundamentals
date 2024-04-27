import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import "./App.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { width } from "@mui/system";

function App() {
  const [todos, setTodos] = useState([]);

  const columnDefs = [
    {
      field: "description",
      headerName: "Description",
      sortable: true,
      filter: true,
    },
    { field: "date", headerName: "Date", sortable: true, filter: true },

    {
      field: "priority",
      headerName: "Priority",
      sortable: true,
      filter: true,
    },
    {
      headerName: "",
      field: "id",
      width: 90,
      cellRenderer: (params) => (
        <IconButton
          onClick={() => deleteTodo(params.value)}
          size="small"
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(
      "https://todolist-96f71-default-rtdb.europe-west1.firebasedatabase.app/items/.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("Raw data from API:", data);
        // const todosArray = Object.values(data);
        // console.log("Formatted data for todos:", todosArray);
        // setTodos(todosArray);
        // console.log("Todos after setting state:", todos);
        addKeys(data);
      })
      .catch((err) => console.error(err));
  };

  // Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) =>
      Object.defineProperty(item, "id", { value: keys[index] })
    );
    setTodos(valueKeys);
  };

  const addTodo = (newTodo) => {
    fetch(
      "https://todolist-96f71-default-rtdb.europe-west1.firebasedatabase.app/items/.json",
      {
        method: "POST",
        body: JSON.stringify(newTodo),
      }
    )
      .then((response) => fetchItems())
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    fetch(
      `https://todolist-96f71-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => fetchItems())
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Todolist</Typography>
        </Toolbar>
      </AppBar>
      <AddTodo addTodo={addTodo} />
      <div className="ag-theme-material" style={{ height: 400, width: 700 }}>
        <AgGridReact rowData={todos} columnDefs={columnDefs} />
      </div>
    </>
  );
}

export default App;
