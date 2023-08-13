import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Albums() {
  const { albums } = useLoaderData();
  console.log(albums);
  return (
    <Link className="button-denied" to="/">
      ПОВЕРНУТИСЯ
    </Link>
  );
}
