import { useEffect, useState } from "react";
import getUsers from "../services/getUsers";

export default function Root() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getUsers();
      setUsers(result.users);
    }

    fetchData();
  }, []);
  return (
    <>
      <nav>
        <h1>HW32. Контакти</h1>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">ДОДАТИ КОНТАКТ</button>
      </nav>
    </>
  );
}
