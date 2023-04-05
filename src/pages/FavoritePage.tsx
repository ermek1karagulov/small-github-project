import React from "react";
import { useAppSelector } from "../hooks/redux";

const FavoritePage = () => {
  const { favorite } = useAppSelector((state) => state.github);

  if (favorite.length === 0) return <p className="text-center">No Items.</p>;
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorite.map((f: string) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default FavoritePage;
