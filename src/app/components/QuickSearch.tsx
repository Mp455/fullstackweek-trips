import React from "react";
import { FaHome } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import { GiCampingTent } from "react-icons/gi";
import Link from "next/link";

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
          <Link
            href={"/trips/search?text=Hotel"}
            className="flex flex-col items-center"
          >
            <ImOffice size={30} className="cursor-pointer text-primary " />
            <p className="text-sm text-grayPrimary">Hotel</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 center">
          <Link
            href={"/trips/search?text=Fazenda"}
            className="flex flex-col items-center"
          >
            <FaHome size={30} className="cursor-pointer text-primary " />
            <p className="text-sm text-grayPrimary">Fazenda</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={"/trips/search?text=Chalé"}
            className="flex flex-col items-center"
          >
            <GiCampingTent size={30} className="cursor-pointer text-primary " />
            <p className="text-sm text-grayPrimary">Chalé</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={"/trips/search?text=Pousada"}
            className="flex flex-col items-center"
          >
            <AiTwotoneHome size={30} className="cursor-pointer text-primary " />
            <p className="text-sm text-grayPrimary ">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
