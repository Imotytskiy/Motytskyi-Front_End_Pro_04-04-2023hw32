import { useRouterError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouterError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops, I did it again!!!!</h1>
      <p>Sorry an unexpected error has occured.</p>
    </div>
  );
};
