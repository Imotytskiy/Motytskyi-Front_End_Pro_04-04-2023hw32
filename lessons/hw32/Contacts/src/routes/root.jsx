import { useEffect, useState } from "react";
import getUsers from "../services/getUsers";
import { Link } from "react-router-dom";

export default function Root() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getUsers();
      setUsers(result.users);
    }

    fetchData();
  }, []);

  const buttonDelClick = (delId) => {
    const updatedData = users.filter((user) => user.id !== delId);
    setUsers(updatedData);
  };

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
              <th>Видалення</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => buttonDelClick(user.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <Link className="new-contact" to="/contact">
                  ДOДАТИ КОНТАКТ
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </>
  );
}
