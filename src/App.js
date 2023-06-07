import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div className="App">
      {users.map((any) => (
        <div className="fake">
           <p>{any.title}</p>
           <p>{any.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
