import React, { useEffect } from "react";

const Card = ({ title, img, info }) => {
  return (
    <div className="flex flex-col rounded-lg home-card-container bg-white justify-center items-center py-14">
      <img className="w-1/4 mb-4 sm:mb-8 sm:w-2/5 md:w-1/8" src={img} alt="" />
      <h2 className="text-2xl sm:text-4xl font-alatsi">{title}</h2>
      <p className="w-1/2 font-cuprum sm:text-xl text-center">{info}</p>
    </div>
  );
};

export default Card;
