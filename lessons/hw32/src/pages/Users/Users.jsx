// import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const Users = () => {
  const { users } = useLoaderData();
  return (
    <ul className="users">
      {users.map((user) => (
        <li key={user.id} className="user">
          <div className="user-info">
            <p>{user.name}</p>
            <p>{user.phone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
