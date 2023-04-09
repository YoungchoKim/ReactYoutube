import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(
    ["related", id],
    async () => {
      return youtube.related(id);
    },
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div>
      {error && <p>error!!!</p>}
      {isLoading && <p>loading!!!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
