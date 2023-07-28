import { ROUTES } from './constants';
import { Posts } from './pages/Posts';
import { Post } from './pages/Post';
import { getUsers } from from './services/getUsers';
import { getPOsts } from from './services/getPosts';
import { getPostById } from from './services/getPostById';
import { ErrorPage } from from './services/ErrorPage';

export const router = createBrowserRouter({
    path: ROUTES.root,
    element:<Root/>
    errorElement: <ErrorPage/>,
    chidren: [
        {
            index: true,
            element: <Users/>,
            loader: getUsers
        },
        {
            path: ROUTES.posts,
            element: <Posts/>,
            loader: getUsers
            errorElement: <>Error inside posts</>
        },
        {
            path: ROUTES.posts,
            element: <POst/>,
            loader: get getPostById
        }
    ]);