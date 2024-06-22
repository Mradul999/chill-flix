// import { useSelector } from "react-redux";
// import {  signOut } from "firebase/auth";
// import {auth} from "../utils/firebase.js";


// export const Browse = () => {
//   const user = useSelector((store) => store.user);



//   function signouthandler(){
//     signOut(auth).then(() => {
        
//       }).catch((error) => {
//       });
//   }
//   return (
//     <div className="w-screen  p-4">
//       <div className="flex flex-row justify-between">
//         <img
//           className="   w-[10rem] h-[5rem] "
//           src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
//           alt="logo"
//         ></img>
//         <div className="flex items-center gap-2">
//           <img src={user?.photoURL} className=" rounded-sm h-12">
//           </img>
//           <button onClick={signouthandler} className="bg-red-600 py-2   px-4 rounded-md text-white font-semibold text-[13px] ">
//             Sign Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };






import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export const Browse = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOutHandler() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }

  return (
    <div className="w-screen p-4">
      <div className="flex flex-row justify-between">
        <img
          className="w-[10rem] h-[5rem]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div className="flex items-center gap-2">
          {user?.photoURL && (
            <img src={user.photoURL} alt="User" className="rounded-sm h-12" />
          )}
          <button
            onClick={signOutHandler}
            className="bg-red-600 py-2 px-4 rounded-md text-white font-semibold text-[13px]"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
