import React from 'react';
import { CardInterface } from '../interface/CardInterface';
import Image from 'next/image';

const Card: React.FC<CardInterface> = ({ title, content, image }) => {
  return (
   
    <div
      className="border-2 border-black hover:border-red-700  lg:w-card-width-lg md:w-card-width-md sm:w-card-width-sm pt-10 bg-[#161616] transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105"
      style={{ zIndex: 2, borderRadius:12 }}
    >
      {image && (
        <div className="  w-full  relative ">
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
      )}
      <div className="px-4 py-8 flex justify-items-center flex-col items-center ">
        <h2 className="text-3xl font-semibold text-white mb-3 whitespace-normal text-limit1">
          {title}
        </h2>
        <p className="text-gray-600 text-lg  mb-4 whitespace-normal leading-relaxed text-limit2 text-center">
          {content}
        </p>
        <button className="bg-red-800  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
