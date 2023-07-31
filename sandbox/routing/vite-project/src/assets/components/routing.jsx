import {createBrowserRouter} from "react-router-dom";
import { Index } from "./index.page";
// import { Movies } from "./movies.page";

export const router = createBrowserRouter(
    [
        {
        path: "/",
        element: <Index/>
        },
        // {
        //     path:"/movies",
        //     element: <Movies/>,
        // },
    ]
    
);