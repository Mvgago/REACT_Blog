import React, { useState, useEffect } from 'react';


export default function Users() {
  //const [count, setCount] = useState(0);
  //useEffect(() => {
  //  document.title = `hemos hecho click ${count} veces`;
  //}, [count]);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data => setUser(data));

  }, [])

  return (
    <>
    <h2>Users</h2>
    {user.map((usuario) => {
      return (
        <div key={usuario.id}>
          <h3>{usuario.name}</h3>
          <p>{usuario.username}</p>
          <p>{usuario.email}</p>

        </div>
      )
    })}
    </>
  )
}
