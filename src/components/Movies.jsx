"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  console.log(dt);
  return (
    <div className="min-w-[400px] h-[300px]">
      <Image
        fill
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
    </div>
  );
};

export default Movies;
