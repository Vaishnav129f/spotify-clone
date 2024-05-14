import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item) => (
            <AlbumItem
              key={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl ">Today's Biggest Hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((item) => (
            <SongItem
              key={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
