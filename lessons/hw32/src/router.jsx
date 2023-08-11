import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import { Root } from "./components/Root";
import { Users } from "./pages/Users";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { getUsers } from "./services/getUsers";
import { getPosts } from "./services/getPosts";
import { getPostById } from "./services/getPostById";
import { ErrorPage } from "./pages/ErrorPage";

Create and export the router configuration
export const router = createBrowserRouter({
  path: ROUTES.root,
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Users />,
      loader: getUsers,
    },
    {
      path: ROUTES.posts,
      element: <Posts />,
      loader: getPosts,
      errorElement: <>Error inside posts</>,
    },
    {
      path: ROUTES.post,
      element: <Post />,
      loader: getPostById,
    },
  ],
});
