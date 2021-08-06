import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHero, selectHero } from "../features/heroesSlice";

const ShowHero = ({ match }) => {
  const dispatch = useDispatch();
  const hero = useSelector(selectHero);

  useEffect(() => {
    dispatch(fetchHero(match.params.id));
  }, [match.params.id, dispatch]);

  return hero ? (
    <div class="min-h-screen bg-purple flex justify-center items-center">
      <div class="container flex justify-center">
        <div class="max-w-sm py-32">
          <div class="card-container bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img class="rounded-t-lg w-full" src={hero.images.md} alt="" />
            <div class="py-6 px-8 rounded-lg bg-white">
              <h1 class="text-black text-center font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                {hero.name}
              </h1>
              <div className="flex justify-between text-sm sm:text-base">
                <div>
                  <p class="text-gray-700 tracking-wide">
                    Height: {hero.appearance.height.slice(0, 1)}
                  </p>
                  <p class="text-gray-700 tracking-wide">
                    Weight: {hero.appearance.weight.slice(0, 1)}
                  </p>
                  <p class="text-gray-700 tracking-wide">
                    Intelligence: {hero.powerstats.intelligence}
                  </p>
                  <p class="text-gray-700 tracking-wide">
                    Strength: {hero.powerstats.strength}
                  </p>
                </div>

                <div>
                  <p class="text-gray-700 tracking-wide">
                    Speed: {hero.powerstats.speed}
                  </p>
                  <p class="text-gray-700 tracking-wide">
                    Power: {hero.powerstats.power}
                  </p>
                  <p class="text-gray-700 tracking-wide">
                    Durability: {hero.powerstats.durability}
                  </p>
                  <p class="text-gray-700 tracking-wide">
                    Combat: {hero.powerstats.combat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ShowHero;
