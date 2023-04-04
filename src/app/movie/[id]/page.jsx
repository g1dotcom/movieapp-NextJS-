import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=840a19c8a5311f5ddb65f56b74f1dc37`
  );
  return await res.json();
};

const page = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovie(id);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3"> {movieDetail?.title}</div>
        <div className="w-1/3 p-2 text-xl  rounded-lg">
          {movieDetail?.overview}
        </div>
        <div className="my-3 bg-black bg-opacity-75 w-1/3 text-center">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="w-1/3 flex justify-center items-center ">
          {" "}
          <div className="my-2 border w-32 p-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer">
            Trail
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
