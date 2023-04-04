"use client";
//Link
import Link from "next/link";
//React
import React from "react";
//Search Params
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    { name: "En Populer", url: "popular" },
    { name: "En Son", url: "latest" },
    { name: "Yakında Gelecekler", url: "upcoming" },
  ];

  return (
    <div className="p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-50 transition-opacity-ease-out duration-100 ${
            tab.url === genre
              ? "underline underline-offset-8 text-amber-500"
              : ""
          } `}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
