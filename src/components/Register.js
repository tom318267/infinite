import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../features/userSlice";
import { auth } from "../firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                displayName: userAuth.user.name,
              })
            );
            setName("");
            setEmail("");
            setPassword("");
            history.push("/");
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="bg-purple w-screen h-screen">
      <div className="w-3/4 my-0 mx-auto font-alatsi text-white pt-12">
        <form className="flex flex-col py-20">
          <h1 className="text-4xl sm:text-5xl text-center mb-8">Register</h1>
          <label className="sm:text-xl">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="name border text-black rounded-md pl-2 outline-none py-1"
            type="text"
            value={name}
          />
          <label className="sm:text-xl">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="email border text-black rounded-md pl-2 outline-none py-1 mb-4"
            type="email"
            value={email}
          />
          <label className="sm:text-xl">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border text-black rounded-md pl-2 outline-none py-1 mb-4"
            type="password"
            value={password}
          />
          <button
            onClick={register}
            className="contact-button p-2 sm:text-xl text-white bg-light_purple font-bold rounded-md"
            type="submit"
          >
            Submit
          </button>
          <h2 className="mt-2 text-lg">
            Already a member?{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register;
