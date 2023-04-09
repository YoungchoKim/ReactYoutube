import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Channel({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: channel,
  } = useQuery(
    ["channels", channelId],
    async () => {
      return youtube.getChannel(channelId);
    },
    { staleTime: 1000 * 60 * 5 }
  );
  if (channel) {
    console.log(channel);
  }

  return (
    <div className="ml-2">
      {error && <p>error!</p>}
      {isLoading && <p>isLoading!!!</p>}
      {channel && (
        <div className="flex  items-center">
          <img
            className="w-6 h-6 rounded-full"
            src={channel.snippet.thumbnails.default.url}
            alt={channel.snippet.title}
          />
          <p className="ml-3">{channel.snippet.title}</p>
        </div>
      )}
    </div>
  );
}
