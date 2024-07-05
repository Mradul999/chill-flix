




import { Browse } from "./Browse.js";
import { Login } from "./Login.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import ProtectedRoute from "./ProtectedRoute";
import { Watch } from "./Watch.js";
import MovieInfo from "./MovieInfo.js";

export const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <ProtectedRoute element={<Browse />} />,
    },
    {
      path:"/watch",
      element:<Watch/>,

    },
    {
      path:"/movieinfo",
      element:<MovieInfo/>

    },
    
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
