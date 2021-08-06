import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ name, img, id }) => {
  return (
    <Link to={`/hero/${id}`} className="cursor-pointer">
      <h1 className="text-white text-2xl font-cuprum">{name}</h1>
      <img
        className="hero-image h-80 object-contain rounded-lg"
        src={img}
        alt=""
      />
    </Link>
  );
};

export default HeroCard;
