import React from "react";
import Card from "./Card";
import profile from "../assets/profile.svg";
import hero from "../assets/hero.svg";
import wave from "../assets/wave.svg";

const FunStats = () => {
  return (
    <div className="bg-lighter_purple w-screen h-full">
      <img src={wave} alt="" />
      <Card
        title="Create a Profile"
        img={profile}
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <Card
        title="Fun Stats"
        img={hero}
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default FunStats;
