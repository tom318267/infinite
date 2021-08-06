import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import infinite from "../assets/infinite.svg";
import { auth } from "../firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="absolute z-10 w-full">
      <div className="flex justify-between text-white">
        <Link to="/" className="m-4 cursor-pointer">
          <img className="w-10" src={infinite} alt="" />
        </Link>

        <div className="nav-items sm:text-xl flex items-center font-cuprum mr-8">
          <Link to="/">
            <h3 className="mr-4 cursor-pointer">Home</h3>
          </Link>
          <Link to="/search">
            <h3 className="mr-4 cursor-pointer">Search</h3>
          </Link>
          {user ? (
            <Link onClick={() => auth.signOut()}>
              <h3 className="cursor-pointer">Logout</h3>
            </Link>
          ) : (
            <Link to="/register">
              <h3 className="cursor-pointer">Login</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
