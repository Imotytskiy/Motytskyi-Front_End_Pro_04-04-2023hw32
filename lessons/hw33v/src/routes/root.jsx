import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Root() {
  const { users } = useLoaderData();

  return (
    <>
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
                  <NavLink
                    key={user.id}
                    className="new-contact"
                    to="/albums/:albumId"
                  >
                    Album
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </nav>
    </>
  );
}
