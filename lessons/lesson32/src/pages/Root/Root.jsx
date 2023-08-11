import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <main>
      <header>
        <h2>header</h2>
        {/*<Nav/>*/}
      </header>
      <Outlet />
      <footer>
        <h2>Footer</h2>
      </footer>
    </main>
  );
};
