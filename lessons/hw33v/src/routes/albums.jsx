import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Albums() {
  const { albums } = useLoaderData();
  console.log(albums);
  return (
    <tbody>
      {albums.map((album) => (
        <tr key={album.id}>
          <td>{album.title}</td>
          <td>{album.userId}</td>
          <td>{album.id}</td>
          <td>
            <Link className="button-denied" to="/">
              ПОВЕРНУТИСЯ
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
