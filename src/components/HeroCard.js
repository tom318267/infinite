import React from "react";

const HeroCard = ({ name, img }) => {
  return (
    <div className="cursor-pointer">
      <h1 className="text-white text-2xl font-cuprum">{name}</h1>
      <img
        className="hero-image h-80 object-contain rounded-lg"
        src={img}
        alt=""
      />
    </div>
  );
};

export default HeroCard;
