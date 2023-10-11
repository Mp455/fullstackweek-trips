import React from "react";
import { FaHome } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import { GiCampingTent } from "react-icons/gi";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-items">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className=" px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-col gap-1">
          <ImOffice size={30} className="cursor-pointer text-primary " />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
        <div className="flex flex-col gap-1 center">
          <FaHome size={30} className="cursor-pointer text-primary " />
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>
        <div className="flex flex-col gap-1">
          <GiCampingTent size={30} className="cursor-pointer text-primary " />
          <p className="text-sm text-grayPrimary">Chalé</p>
        </div>
        <div className="flex flex-col gap-1">
          <AiTwotoneHome size={30} className="cursor-pointer text-primary " />
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
