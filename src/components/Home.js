import React from "react";
import { Link } from "react-router-dom";
import infinite from "../assets/infinite.svg";
import FunStats from "./FunStats";

const Home = () => {
  return (
    <>
      <div className="bg-purple w-screen h-screen">
        <div className="flex flex-col h-screen justify-center items-center text-white">
          <img
            className="object-contain h-38"
            src={infinite}
            alt="infinite-logo"
          />
          <h1 className="text-7xl sm:text-8xl font-alatsi uppercase title">
            Infinite
          </h1>
          <p className="font-cuprum mb-4 text-lg sm:text-2xl">
            Search for your favorite superheroes!
          </p>
          <div className="font-cuprum">
            <Link to="/register">
              <button className="py-3 px-5 mr-2 rounded-lg text-lg sm:text-2xl  bg-light_purple">
                Sign Up
              </button>
            </Link>

            <Link to="/login">
              <button className="py-3 px-5 rounded-lg text-lg sm:text-2xl bg-light_purple">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FunStats />
    </>
  );
};

export default Home;
