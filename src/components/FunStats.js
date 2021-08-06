import React, { useEffect } from "react";
import Card from "./Card";
import profile from "../assets/profile.svg";
import hero from "../assets/hero.svg";
import wave from "../assets/wave.svg";
import Aos from "aos";

const FunStats = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-lighter_purple w-screen h-full pb-20">
      <img src={wave} alt="wave" />
      <div data-aos="fade-up-right">
        <Card
          title="Create a Profile"
          img={profile}
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>

      <div data-aos="fade-up-left">
        <Card
          title="Fun Stats"
          img={hero}
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default FunStats;
