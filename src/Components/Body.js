import {Browse} from "./Browse.js";
import {Login} from "./Login.js";
import{SignUp} from "./SignUp.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
    ]);

    return(
        <div>
            <RouterProvider router={appRouter}/>;
        </div>
    )
}