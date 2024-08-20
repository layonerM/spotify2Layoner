import { atom, selector } from "recoil";
import { getSession } from "../utils/auth";
import dataJson from "../data/data.json";
import { Navigate } from "react-router-dom";
export const userAtom = atom({
  key: "authAtom",
  default: {
    user: getSession("user") || null,
    isLoading: false,
  },
});

export const songAtom = atom({
  key: "songAtom",
  default: null,
});

export const musicBarAtom = atom({
  key: "musicBarAtom",
  default: null,
});

export const searchAtom = atom({
  key: "searchAtom",
  default: null,
});

export const searchResultSelector = selector({
  key: "searchResultSelector",
  get: ({ get }) => {
    const searchResult = get(searchAtom);
    if (searchResult === null) return "";
    const result = dataJson.artists.find((artist) =>
      artist.name.toLowerCase().includes(searchResult.toLowerCase())
    );
    if (result !== undefined) {
      return result;
    } else {
      return "No result found";
    }
  },
});
