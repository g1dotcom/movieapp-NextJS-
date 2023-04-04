import Movies from "@/components/Movies";
import React from "react";

const page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=840a19c8a5311f5ddb65f56b74f1dc37&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  console.log(data);

  return (
    <div>
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default page;
