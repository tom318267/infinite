import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes, fetchHeroes } from "../features/heroesSlice";
import SpinnerLoad from "../components/SpinnerLoad";
import HeroCard from "./HeroCard";

const Search = () => {
  const [input, setInput] = useState("");
  const heroes = useSelector(selectHeroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  const filterHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(input.toLowerCase());
  });

  return !heroes.length ? (
    <SpinnerLoad />
  ) : (
    <div className="bg-purple w-screen h-full pb-80">
      <h2 className="flex justify-center text-4xl sm:text-5xl pt-40 text-white font-cuprum">
        Search Hero
      </h2>
      <div className="flex justify-center pt-10">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="search-input w-2/3 h-12 pl-2 outline-none"
          placeholder="E.g. Batman"
          type="text"
          value={input}
        />
        <button type="submit" className="bg-light_purple p-2 text-white">
          Submit
        </button>
      </div>
      <div className="flex flex-wrap gap-10 justify-center pt-40">
        {filterHeroes.map((hero) => (
          <HeroCard name={hero.name} img={hero.images.sm} />
        ))}
      </div>
    </div>
  );
};

export default Search;
