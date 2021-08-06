import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login } from "../features/userSlice";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            password: userAuth.user.password,
          })
        );
        history.push("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-purple w-screen h-screen">
      <div className="w-3/4 my-0 mx-auto font-alatsi text-white pt-12">
        <form className="flex flex-col py-20">
          <h1 className="text-4xl sm:text-5xl text-center mb-8">Login</h1>
          <label className="sm:text-xl">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="email border text-black rounded-md pl-2 outline-none py-1"
            type="email"
            value={email}
          />
          <label className="sm:text-xl">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="password border text-black rounded-md pl-2 outline-none py-1 mb-4"
            type="password"
            value={password}
          />
          <button
            onClick={loginToApp}
            className="contact-button sm:text-xl p-2 text-white bg-light_purple font-bold rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
