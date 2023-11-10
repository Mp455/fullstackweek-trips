import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2 ">Destaques</h2>

      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2 w-1/2">
            <AiOutlineCheckCircle size={20} className="text-primary" />
            <p className="text-grayPrimary text-xs">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
