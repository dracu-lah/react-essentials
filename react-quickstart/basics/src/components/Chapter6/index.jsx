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
      {users.map((user, index) => (<div key={user.id}>{index + 1}.{user.name}</div>))}
    </div>
  );
}

export default Chapter6
