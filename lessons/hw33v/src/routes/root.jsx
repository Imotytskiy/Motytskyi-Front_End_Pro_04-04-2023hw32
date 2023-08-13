import { useEffect, useState } from "react";
import getUsers from "../services/getUsers";
import { Link } from "react-router-dom";
// import { ContactContext } from "../component/ContactContext";  // реализация через state

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
      {/* <ContactContext.Provider value={{ newContact }}> */}
      <nav>
        <h1>HW 34. React router</h1>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.id}</td>
                <td>
                  <Link
                    // onNewContact={newContact}
                    className="new-contact"
                    to="/albums/:userId"
                  >
                    Album
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </nav>
      {/* </ContactContext.Provider> */}
    </>
  );
}
