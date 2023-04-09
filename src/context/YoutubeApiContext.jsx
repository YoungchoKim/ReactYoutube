import React, { createContext, useContext } from "react";
import { RealYoutubeApi } from "../api/RealYoutubeApi";
import { Youtube } from "../api/Youtube";
import { FakeYoutubeApi } from "../api/FakeYoutubeApi";

const youtubeContext = createContext();

const youtubeApi = new FakeYoutubeApi();
// const youtubeApi = new RealYoutubeApi();
const youtube = new Youtube(youtubeApi);

export function YoutubeApiProvider({ children }) {
  return (
    <youtubeContext.Provider value={{ youtube }}>
      {children}
    </youtubeContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(youtubeContext);
}
