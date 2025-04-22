import { useEffect, useState } from "react";

const Chapter6 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "12px" }}><u>Chapter 6 | API Calling</u></h1>
      <div>
        {users.map((user, index) => (<div key={user.id}>{index + 1}.{user.name}</div>))}
      </div>
    </div>
  );
}

export default Chapter6
