import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removefavorite } = useActions();
  const { favorite } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favorite.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removefavorite(repo.html_url);
    setIsFav(false);
  };
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="blank ">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFav && (
          <button
            className="py-4 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
            onClick={addToFavorite}
          >
            Add
          </button>
        )}
        {isFav && (
          <button
            className="py-4 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavorite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
