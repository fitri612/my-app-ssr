import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Commentar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
