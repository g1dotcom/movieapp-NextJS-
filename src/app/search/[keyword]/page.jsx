import Movies from "@/components/Movies";
import React from "react";

const page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=840a19c8a5311f5ddb65f56b74f1dc37&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  console.log(data, "data");

  return (
    <div>
      {!data?.results ? (
        <div className="">Aranılan Film Bulunamadı.</div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
