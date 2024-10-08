import { Validate } from "../utils/Validate";
import { useRef, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import "./Login.css";


export const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null); 

  function toggleForm() {
    setIsSignUp(!isSignUp);
    setErrorMsg("");
  }

  function clickHandler() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : null; 

    const msg = Validate(email, password, isSignUp ? name : undefined);
    setErrorMsg(msg);

    if (msg) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/116281109?v=4",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              console.error("Error updating profile: ", error);
              setErrorMsg("Error updating profile. Please try again.");
            });
        })
        .catch((error) => {
          console.error("Error creating user: ", error);
          setErrorMsg("This user is already registered.");
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg("User not registered");
        });
    }
  }

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
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="w-screen login-bg  min-h-screen login overflow-x-hidden  px-2 pt-5">
      <h1 className="text-red-600 font-bold text-[2rem] sm:text-[2.7rem]    mt-2 ml-1 sm:ml-2">
        CHILLFLIX
      </h1>

      
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-center p-3 sm:p-10  mt-12 mx-auto rounded-lg max-w-[380px] bg-black bg-opacity-90 form text-white"
        >
          <h1 className="text-white text-[25px] mb-10 font-semibold">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <label className="flex flex-col">
              <input
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="h-14 mb-8 rounded-md pl-2 text-[1.2rem] placeholder:text-white bg-gray-500"
              />
            </label>
          )}
          <label className="flex flex-col">
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your Email"
              className="h-14 mb-8 rounded-md pl-2 text-[1.2rem] placeholder:text-white bg-gray-500"
            />
          </label>
          <label className="flex flex-col">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter Your Password"
              className="h-14 mb-8 rounded-md px-2 text-[1.2rem] placeholder:text-white bg-gray-500"
            />
          </label>

          <button
            onClick={clickHandler}
            className="bg-red-600 py-3 px-5 rounded-md mb-1 text-xl"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <span className="text-red-600 font-bold mb-8 text-left">
            {errorMsg}
          </span>
          <div className="mx-auto flex flex-col sm:flex sm:flex-row gap-3 items-center text-[1.2rem]  sm:text-xl font-semibold">
            {isSignUp ? (
              <>
                Already signed up?
                <button
                  onClick={toggleForm}
                  className="bg-red-600 py-2 px-4 rounded-lg text-white"
                >
                  Sign In now
                </button>
              </>
            ) : (
              <>
                <span>New to Chillflix?</span>
                <button
                  onClick={toggleForm}
                  className="bg-red-600 py-2 px-4 rounded-lg text-white"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </form>
      
    </div>
  );
};
