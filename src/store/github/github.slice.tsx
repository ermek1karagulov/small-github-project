import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

const LS_FAV_KEY = "rfk";

interface GithubState {
  favorite: string[];
}

const initialState: GithubState = {
  favorite: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorite.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorite));
    },
    removefavorite(state, action: PayloadAction<string>) {
      state.favorite = state.favorite.filter((f) => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorite));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
